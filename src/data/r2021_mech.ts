import { Semester, Subject } from '../types';
import {
  OEPoolI, OEPoolII, OEPoolIII, OEPoolIV,
  MandatoryCourseIPool, MandatoryCourseIIPool, ManagementElectivePool
} from './shared_r2021';

const mechPEOptions: Subject[] = [
  { code: 'CME331', name: 'Advanced Manufacturing Processes', credits: 3, type: 'elective_pe' },
  { code: 'CME332', name: 'Automation and Robotics', credits: 3, type: 'elective_pe' },
  { code: 'CME333', name: 'Additive Manufacturing', credits: 3, type: 'elective_pe' },
  { code: 'CME334', name: 'Composite Materials', credits: 3, type: 'elective_pe' },
  { code: 'CME335', name: 'Computational Fluid Dynamics', credits: 3, type: 'elective_pe' },
  { code: 'CME336', name: 'Refrigeration and Air Conditioning', credits: 3, type: 'elective_pe' },
  { code: 'CME337', name: 'Renewable Energy Systems', credits: 3, type: 'elective_pe' },
  { code: 'CME338', name: 'Product Life Cycle Management', credits: 3, type: 'elective_pe' },
  { code: 'CME339', name: 'Mechatronics', credits: 3, type: 'elective_pe' },
  { code: 'CME340', name: 'Industrial Safety Engineering', credits: 3, type: 'elective_pe' },
  { code: 'CME341', name: 'Non-Destructive Testing', credits: 3, type: 'elective_pe' },
  { code: 'CME342', name: 'Smart Manufacturing', credits: 3, type: 'elective_pe' },
  { code: 'CME343', name: 'New Product Development', credits: 3, type: 'elective_pe' },
  { code: 'CME344', name: 'Welding Engineering', credits: 3, type: 'elective_pe' },
  { code: 'CME345', name: 'Vibrations and Acoustics', credits: 3, type: 'elective_pe' },
  { code: 'CME346', name: 'Tribology', credits: 3, type: 'elective_pe' },
  { code: 'CME365', name: 'Renewable Energy Technologies', credits: 3, type: 'elective_pe' },
];

export const r2021_mech: Semester[] = [
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
      { code: 'ME3301', name: 'Engineering Thermodynamics', credits: 4, type: 'theory' },
      { code: 'ME3391', name: 'Manufacturing Technology – I', credits: 3, type: 'theory' },
      { code: 'ME3302', name: 'Fluid Mechanics and Machinery', credits: 4, type: 'theory' },
      { code: 'ME3311', name: 'Fluid Mechanics and Machinery Lab', credits: 1.5, type: 'lab' },
      { code: 'ME3312', name: 'Manufacturing Technology Lab – I', credits: 1.5, type: 'lab' },
      { code: 'GE3361', name: 'Professional Development', credits: 1, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'ME3401', name: 'Applied Thermodynamics', credits: 4, type: 'theory' },
      { code: 'ME3491', name: 'Kinematics of Machinery', credits: 4, type: 'theory' },
      { code: 'ME3451', name: 'Manufacturing Technology – II', credits: 3, type: 'theory' },
      { code: 'ME3402', name: 'Strength of Materials', credits: 4, type: 'theory' },
      { code: 'GE3451', name: 'Environmental Sciences and Sustainability', credits: 2, type: 'mandatory' },
      { code: 'ME3411', name: 'Kinematics of Machinery Lab', credits: 1.5, type: 'lab' },
      { code: 'ME3461', name: 'Manufacturing Technology Lab – II', credits: 1.5, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'ME3501', name: 'Dynamics of Machinery', credits: 4, type: 'theory' },
      { code: 'ME3551', name: 'Design of Machine Elements', credits: 4, type: 'theory' },
      { code: 'ME3502', name: 'Heat Transfer', credits: 4, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: mechPEOptions },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: mechPEOptions },
      { code: 'MC-I', name: 'Mandatory Course I', credits: 0, type: 'mandatory', options: MandatoryCourseIPool },
      { code: 'ME3511', name: 'Thermal Engineering Lab – I', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'ME3601', name: 'Finite Element Analysis', credits: 4, type: 'theory' },
      { code: 'ME3651', name: 'Computer Aided Design and Manufacturing', credits: 4, type: 'theory' },
      { code: 'ME3602', name: 'Metrology and Measurements', credits: 3, type: 'theory' },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: mechPEOptions },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: mechPEOptions },
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
      { code: 'ME3711', name: 'Summer Internship', credits: 2, type: 'internship' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'ME3811', name: 'Project Work / Internship', credits: 10, type: 'project' },
    ]
  }
];
