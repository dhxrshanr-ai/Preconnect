export const GRADE_POINTS: Record<string, number> = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'RA': 0, // reappear/arrear
  'SA': 0, // absent/detained
  'W': 0   // withheld
};

export type SGPAInput = {
  credits: number;
  grade: string;
  type: string;
};

export function calculateSGPA(subjects: SGPAInput[]): number {
  let earnedPoints = 0;
  let totalCredits = 0;

  for (const sub of subjects) {
    if (sub.credits === 0 || sub.type === 'mandatory') {
      // 0-credit audits or mandatory subjects don't affect SGPA
      continue;
    }
    if (!sub.grade || GRADE_POINTS[sub.grade] === undefined) {
      // user hasn't selected a grade yet
      continue;
    }

    const points = GRADE_POINTS[sub.grade];
    earnedPoints += points * sub.credits;
    totalCredits += sub.credits; 
    // Notice: RA adds to totalCredits but (0 * credits) adds 0 to earnedPoints, dragging down SGPA correctly.
  }

  return totalCredits === 0 ? 0 : earnedPoints / totalCredits;
}

export function calculateCGPA(semesters: { sgpa: number; totalCredits: number }[]): number {
  let allEarned = 0;
  let allCredits = 0;

  for (const sem of semesters) {
    if (sem.totalCredits > 0 && sem.sgpa > 0) {
      allEarned += sem.sgpa * sem.totalCredits;
      allCredits += sem.totalCredits;
    }
  }

  return allCredits === 0 ? 0 : allEarned / allCredits;
}
