import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Regulation, REGULATION_GRADES } from '../data/regulations';

// Types
export interface Subject {
  id: string;
  code: string;
  name: string;
  credits: number;
  grade: string;
  gradePoints: number;
  gradeLabel: string;
  gradeValue: number;
  semesterId: string;
  category?: string;
  isProjected?: boolean;
}

export interface Arrear {
  id: string;
  code: string;
  name: string;
  credits: number;
  attempts: number;
  status: 'pending' | 'cleared';
  targetGrade?: string;
}

export interface Semester {
  id: string;
  name: string;
  subjects: Subject[];
  gpa: number;
  totalCredits: number;
  isActive: boolean;
}

export interface AcademicInsight {
  type: 'eligibility' | 'warning' | 'info' | 'achievement';
  message: string;
  isPositive: boolean;
}

export interface GPAState {
  // State
  semesters: Semester[];
  arrears: Arrear[];
  activeSemesterId: string | null;
  targetGPA: number | null;
  regulation: Regulation;
  
  // Computed
  cumulativeGPA: number;
  totalCredits: number;
  
  // Actions
  addSemester: (name: string) => void;
  removeSemester: (id: string) => void;
  setActiveSemester: (id: string) => void;
  setRegulation: (regulation: Regulation) => void;
  
  addSubject: (subject: Omit<Subject, 'id' | 'gradePoints' | 'gradeLabel' | 'gradeValue'>) => void;
  updateSubject: (id: string, updates: Partial<Subject>) => void;
  removeSubject: (semesterId: string, subjectId: string) => void;
  
  addArrear: (arrear: Omit<Arrear, 'id' | 'attempts' | 'status'>) => void;
  updateArrear: (id: string, updates: Partial<Arrear>) => void;
  removeArrear: (id: string) => void;
  clearArrear: (id: string, grade: string) => void;
  
  setTargetGPA: (target: number | null) => void;
  
  calculateGPA: (semesterId: string) => number;
  calculateCGPA: () => number;
  getInsights: () => AcademicInsight[];
  
  // Internal helpers
  _calculateGPAFromSubjects: (subjects: Subject[]) => number;
  calculateCumulativeGPA: () => number;
  reset: () => void;
}

// Initial state
const initialState = {
  semesters: [
    { id: '1', name: 'Semester 1', subjects: [], gpa: 0, totalCredits: 0, isActive: true }
  ],
  arrears: [],
  activeSemesterId: '1',
  targetGPA: 8.0,
  regulation: 'R2021' as Regulation,
  cumulativeGPA: 0,
  totalCredits: 0,
};

// Create store
export const useGPAStore = create<GPAState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setRegulation: (regulation) => {
        set({ regulation });
        // Recalculate all GPAs based on new regulation grade points
        set((state) => {
          const semesters = state.semesters.map((semester) => {
            const subjects = semester.subjects.map((subject) => {
              const gradePoints = REGULATION_GRADES[regulation][subject.grade.toUpperCase()] || 0;
              return {
                ...subject,
                gradePoints,
                gradeValue: gradePoints,
              };
            });
            const gpa = get()._calculateGPAFromSubjects(subjects);
            return { ...semester, subjects, gpa };
          });
          return { semesters, cumulativeGPA: get().calculateCumulativeGPA() };
        });
      },

      addSemester: (name) => {
        const id = `semester-${Date.now()}`;
        const newSemester: Semester = {
          id,
          name,
          subjects: [],
          gpa: 0,
          totalCredits: 0,
          isActive: false,
        };
        
        set((state) => ({
          semesters: [...state.semesters, newSemester],
          activeSemesterId: id,
        }));
      },

      removeSemester: (id) => {
        set((state) => ({
          semesters: state.semesters.filter((s) => s.id !== id),
          activeSemesterId: state.activeSemesterId === id 
            ? state.semesters[0]?.id || null 
            : state.activeSemesterId,
        }));
      },

      setActiveSemester: (id) => {
        set({ activeSemesterId: id });
      },

      addSubject: (subject) => {
        const { activeSemesterId, regulation } = get();
        if (!activeSemesterId) return;

        const id = `subject-${Date.now()}`;
        const gradePoints = REGULATION_GRADES[regulation][subject.grade.toUpperCase()] || 0;
        
        const newSubject: Subject = {
          ...subject,
          id,
          gradePoints,
          gradeLabel: subject.grade,
          gradeValue: gradePoints,
        };

        set((state) => {
          const semesters = state.semesters.map((semester) => {
            if (semester.id === activeSemesterId) {
              const subjects = [...semester.subjects, newSubject];
              const gpa = get()._calculateGPAFromSubjects(subjects);
              const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
              return { ...semester, subjects, gpa, totalCredits };
            }
            return semester;
          });

          // Automatically add to arrears if grade is F or U
          const isFailing = ['F', 'U', 'RA'].includes(subject.grade.toUpperCase());
          const arrears = isFailing 
            ? [...state.arrears, {
                id: `arrear-${Date.now()}`,
                code: subject.code,
                name: subject.name,
                credits: subject.credits,
                attempts: 1,
                status: 'pending' as const
              }]
            : state.arrears;

          return {
            semesters,
            arrears,
            cumulativeGPA: get().calculateCumulativeGPA(),
          };
        });
      },

      updateSubject: (id, updates) => {
        const { regulation } = get();
        
        set((state) => {
          const semesters = state.semesters.map((semester) => {
            const subjects = semester.subjects.map((subject) => {
              if (subject.id === id) {
                const updatedSubject = { ...subject, ...updates };
                if (updates.grade) {
                  const gradePoints = REGULATION_GRADES[regulation][updates.grade.toUpperCase()] || 0;
                  updatedSubject.gradePoints = gradePoints;
                  updatedSubject.gradeLabel = updates.grade;
                  updatedSubject.gradeValue = gradePoints;
                }
                return updatedSubject;
              }
              return subject;
            });

            const gpa = get()._calculateGPAFromSubjects(subjects);
            const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
            return { ...semester, subjects, gpa, totalCredits };
          });

          return {
            semesters,
            cumulativeGPA: get().calculateCumulativeGPA(),
          };
        });
      },

      removeSubject: (semesterId, subjectId) => {
        set((state) => {
          const semesters = state.semesters.map((semester) => {
            if (semester.id === semesterId) {
              const subjects = semester.subjects.filter((s) => s.id !== subjectId);
              const gpa = get()._calculateGPAFromSubjects(subjects);
              const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
              return { ...semester, subjects, gpa, totalCredits };
            }
            return semester;
          });

          return {
            semesters,
            cumulativeGPA: get().calculateCumulativeGPA(),
          };
        });
      },

      addArrear: (arrear) => {
        const id = `arrear-${Date.now()}`;
        const newArrear: Arrear = {
          ...arrear,
          id,
          attempts: 1,
          status: 'pending',
        };
        set((state) => ({ arrears: [...state.arrears, newArrear] }));
      },

      updateArrear: (id, updates) => {
        set((state) => ({
          arrears: state.arrears.map((a) => a.id === id ? { ...a, ...updates } : a),
        }));
      },

      removeArrear: (id) => {
        set((state) => ({ arrears: state.arrears.filter((a) => a.id !== id) }));
      },

      clearArrear: (id, grade) => {
        const arrear = get().arrears.find(a => a.id === id);
        if (!arrear) return;

        // Optionally add it to current active semester
        const { activeSemesterId } = get();
        if (activeSemesterId) {
          get().addSubject({
            code: arrear.code,
            name: arrear.name,
            credits: arrear.credits,
            grade: grade,
            semesterId: activeSemesterId,
          });
        }

        set((state) => ({
          arrears: state.arrears.filter((a) => a.id !== id),
        }));
      },

      setTargetGPA: (target) => {
        set({ targetGPA: target });
      },

      _calculateGPAFromSubjects: (subjects) => {
        if (subjects.length === 0) return 0;

        const totalPoints = subjects.reduce(
          (sum, subject) => sum + subject.gradePoints * subject.credits,
          0
        );
        const totalCredits = subjects.reduce(
          (sum, subject) => sum + subject.credits,
          0
        );

        return totalCredits > 0 ? Number((totalPoints / totalCredits).toFixed(2)) : 0;
      },

      calculateGPA: (semesterId) => {
        const semester = get().semesters.find(s => s.id === semesterId);
        if (!semester || semester.subjects.length === 0) return 0;
        return semester.gpa;
      },

      calculateCGPA: () => {
        return get().calculateCumulativeGPA();
      },

      calculateCumulativeGPA: () => {
        const { semesters } = get();
        
        let totalPoints = 0;
        let totalCredits = 0;

        semesters.forEach((semester) => {
          semester.subjects.forEach((subject) => {
            totalPoints += subject.gradePoints * subject.credits;
            totalCredits += subject.credits;
          });
        });

        return totalCredits > 0 ? Number((totalPoints / totalCredits).toFixed(2)) : 0;
      },

      getInsights: () => {
        const { cumulativeGPA, arrears } = get();
        const insights: AcademicInsight[] = [];

        const pendingArrearsCount = arrears.length;

        if (pendingArrearsCount === 0 && cumulativeGPA >= 6.5) {
          insights.push({
            type: 'eligibility',
            message: 'Eligible for placement (No arrears, CGPA ≥ 6.5)',
            isPositive: true,
          });
        } else if (pendingArrearsCount > 0) {
          insights.push({
            type: 'warning',
            message: `Not placement eligible: ${pendingArrearsCount} pending arrear(s)`,
            isPositive: false,
          });
        } else if (cumulativeGPA < 6.5) {
          insights.push({
            type: 'warning',
            message: 'Boost CGPA to 6.5+ for placement eligibility',
            isPositive: false,
          });
        }

        if (cumulativeGPA >= 8.5) {
          insights.push({
            type: 'achievement',
            message: "Outstanding! You're on track for Distinction (8.5+)",
            isPositive: true,
          });
        } else if (cumulativeGPA >= 7.5) {
          insights.push({
            type: 'eligibility',
            message: 'Eligible for Higher Studies (CGPA ≥ 7.5)',
            isPositive: true,
          });
        }

        return insights;
      },

      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'gpa-calculator-storage',
      version: 2,
      migrate: (persistedState: any, version: number) => {
        if (version === 1) {
          return {
            ...persistedState,
            regulation: 'R2021',
            arrears: [],
          };
        }
        return persistedState;
      },
    }
  )
);
