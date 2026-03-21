import { Semester, Subject } from '../types';
import {
  OEPoolI, OEPoolII, OEPoolIII, OEPoolIV,
  MandatoryCourseIPool, MandatoryCourseIIPool, ManagementElectivePool
} from './shared_r2021';

const civilPEOptions: Subject[] = [
  { code: 'CCE331', name: 'Advanced Structural Analysis', credits: 3, type: 'elective_pe' },
  { code: 'CCE332', name: 'Earthquake Engineering', credits: 3, type: 'elective_pe' },
  { code: 'CCE333', name: 'Prefabricated Structures', credits: 3, type: 'elective_pe' },
  { code: 'CCE334', name: 'Bridge Engineering', credits: 3, type: 'elective_pe' },
  { code: 'CCE335', name: 'Pavement Analysis and Design', credits: 3, type: 'elective_pe' },
  { code: 'CCE336', name: 'Ground Improvement Techniques', credits: 3, type: 'elective_pe' },
  { code: 'CCE337', name: 'Water Resources Engineering', credits: 3, type: 'elective_pe' },
  { code: 'CCE338', name: 'Solid and Hazardous Waste Management', credits: 3, type: 'elective_pe' },
  { code: 'CCE339', name: 'Remote Sensing and GIS', credits: 3, type: 'elective_pe' },
  { code: 'CCE340', name: 'Green Building Design', credits: 3, type: 'elective_pe' },
  { code: 'CCE341', name: 'Repair and Rehabilitation of Structures', credits: 3, type: 'elective_pe' },
  { code: 'CCE342', name: 'Infrastructure Planning and Development', credits: 3, type: 'elective_pe' },
  { code: 'CCE343', name: 'Urban Storm Water Management', credits: 3, type: 'elective_pe' },
];

export const r2021_civil: Semester[] = [
  {
    sem: 1,
    subjects: [
      { code: 'IP3151', name: 'Induction Programme', credits: 0, type: 'mandatory' },
      { code: 'HS3152', name: 'Professional English – I', credits: 3, type: 'theory' },
      { code: 'MA3151', name: 'Matrices and Calculus', credits: 4, type: 'theory' },
      { code: 'PH3151', name: 'Engineering Physics', credits: 3, type: 'theory' },
      { code: 'CY3151', name: 'Engineering Chemistry', credits: 3, type: 'theory' },
      { code: 'GE3151', name: 'Problem Solving and Python Programming', credits: 3, type: 'theory' },
      { code: 'GE3152', name: 'Heritage of Tamils / Tamil Mozhi', credits: 1, type: 'mandatory' },
      { code: 'GE3171', name: 'Problem Solving and Python Prog. Lab', credits: 2, type: 'lab' },
      { code: 'BS3171', name: 'Physics and Chemistry Laboratory', credits: 2, type: 'lab' },
      { code: 'GE3172', name: 'English Laboratory', credits: 1, type: 'lab' },
    ]
  },
  {
    sem: 2,
    subjects: [
      { code: 'HS3252', name: 'Professional English – II', credits: 2, type: 'theory' },
      { code: 'MA3251', name: 'Statistics and Numerical Methods', credits: 4, type: 'theory' },
      { code: 'PH3253', name: 'Physics for Mechanical Engineering', credits: 3, type: 'theory' },
      { code: 'BE3251', name: 'Basic Electrical and Electronics Engg', credits: 4, type: 'theory' },
      { code: 'GE3251', name: 'Engineering Graphics', credits: 4, type: 'theory' },
      { code: 'GE3252', name: 'Tamils and Technology', credits: 1, type: 'mandatory' },
      { code: 'GE3271', name: 'Engineering Practices Laboratory', credits: 2, type: 'lab' },
      { code: 'GE3272', name: 'Communication Lab / Foreign Language', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 3,
    subjects: [
      { code: 'MA3351', name: 'Transforms and Partial Differential Equns', credits: 4, type: 'theory' },
      { code: 'CE3301', name: 'Mechanics of Solids', credits: 4, type: 'theory' },
      { code: 'CE3302', name: 'Fluid Mechanics', credits: 4, type: 'theory' },
      { code: 'CE3391', name: 'Building Materials and Construction', credits: 3, type: 'theory' },
      { code: 'CE3303', name: 'Engineering Geology', credits: 3, type: 'theory' },
      { code: 'CE3311', name: 'Fluid Mechanics Lab', credits: 1.5, type: 'lab' },
      { code: 'CE3312', name: 'Surveying Lab', credits: 1.5, type: 'lab' },
      { code: 'GE3361', name: 'Professional Development', credits: 1, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'CE3401', name: 'Structural Analysis – I', credits: 4, type: 'theory' },
      { code: 'CE3491', name: 'Hydraulic Engineering', credits: 4, type: 'theory' },
      { code: 'CE3402', name: 'Soil Mechanics', credits: 4, type: 'theory' },
      { code: 'CE3403', name: 'Environmental Engineering – I', credits: 3, type: 'theory' },
      { code: 'GE3451', name: 'Environmental Sciences and Sustainability', credits: 2, type: 'mandatory' },
      { code: 'CE3411', name: 'Environmental Engineering Lab', credits: 1.5, type: 'lab' },
      { code: 'CE3461', name: 'Soil Mechanics Lab', credits: 1.5, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'CE3501', name: 'Structural Analysis – II', credits: 4, type: 'theory' },
      { code: 'CE3551', name: 'Design of RC Elements', credits: 4, type: 'theory' },
      { code: 'CE3502', name: 'Foundation Engineering', credits: 4, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: civilPEOptions },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: civilPEOptions },
      { code: 'MC-I', name: 'Mandatory Course I', credits: 0, type: 'mandatory', options: MandatoryCourseIPool },
      { code: 'CE3511', name: 'Concrete and Highway Materials Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'CE3601', name: 'Design of Steel Structures', credits: 4, type: 'theory' },
      { code: 'CE3651', name: 'Environmental Engineering – II', credits: 3, type: 'theory' },
      { code: 'CE3602', name: 'Construction Planning and Management', credits: 3, type: 'theory' },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: civilPEOptions },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: civilPEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
      { code: 'MC-II', name: 'Mandatory Course II', credits: 0, type: 'mandatory', options: MandatoryCourseIIPool },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'GE3791', name: 'Human Values and Ethics', credits: 2, type: 'theory' },
      { code: 'Elective-Mgmt', name: 'Management Elective', credits: 3, type: 'theory', options: ManagementElectivePool },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: OEPoolII },
      { code: 'OE-III', name: 'Open Elective III', credits: 3, type: 'elective_oe', options: OEPoolIII },
      { code: 'OE-IV', name: 'Open Elective IV', credits: 3, type: 'elective_oe', options: OEPoolIV },
      { code: 'CE3711', name: 'Summer Internship', credits: 2, type: 'internship' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'CE3811', name: 'Project Work / Internship', credits: 10, type: 'project' },
    ]
  }
];
