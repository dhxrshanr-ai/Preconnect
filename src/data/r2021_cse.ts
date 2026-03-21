import { Semester, Subject } from '../types';
import { ManagementElectivePool, OEPoolI, OEPoolII, OEPoolIII, OEPoolIV } from './shared_r2021';const csePEOptions: Subject[] = [
  { code: 'CS3501', name: 'Compiler Design', credits: 3, type: 'elective_pe' },
  { code: 'CB3491', name: 'Cryptography and Cyber Security', credits: 3, type: 'elective_pe' },
  { code: 'CS3552', name: 'Foundations of Data Science', credits: 3, type: 'elective_pe' },
  { code: 'CS3504', name: 'Internet of Things', credits: 3, type: 'elective_pe' },
  { code: 'CS3601', name: 'Cloud Computing', credits: 3, type: 'elective_pe' },
  { code: 'CS3602', name: 'Cyber Security', credits: 3, type: 'elective_pe' },
  { code: 'CS3603', name: 'Deep Learning', credits: 3, type: 'elective_pe' },
  { code: 'CS3604', name: 'Mobile Application Development', credits: 3, type: 'elective_pe' },
  { code: 'CS3651', name: 'Computer Graphics', credits: 3, type: 'elective_pe' },
  { code: 'CS3652', name: 'Compiler Design', credits: 3, type: 'elective_pe' },
  { code: 'CS3653', name: 'Information Retrieval', credits: 3, type: 'elective_pe' },
  { code: 'CS3654', name: 'Software Testing', credits: 3, type: 'elective_pe' },
  { code: 'CS3701', name: 'Blockchain Technology', credits: 3, type: 'elective_pe' },
  { code: 'CS3702', name: 'Digital Signal Processing', credits: 3, type: 'elective_pe' },
  { code: 'CS3703', name: 'Embedded Systems', credits: 3, type: 'elective_pe' },
  { code: 'CS3704', name: 'Parallel Computing', credits: 3, type: 'elective_pe' },
  { code: 'CS3751', name: 'Human Computer Interaction', credits: 3, type: 'elective_pe' },
  { code: 'CS3752', name: 'Advanced Database Systems', credits: 3, type: 'elective_pe' },
  { code: 'CS3753', name: 'Data Warehousing and Mining', credits: 3, type: 'elective_pe' },
  { code: 'CS3754', name: 'Multimedia Systems', credits: 3, type: 'elective_pe' },
  { code: 'CS3001', name: 'Quantum Computing', credits: 3, type: 'elective_pe' },
  { code: 'CS3002', name: 'Advanced Algorithms', credits: 3, type: 'elective_pe' },
];

export const r2021_cse: Semester[] = [
  {
    sem: 1,
    subjects: [
      { code: 'MA3151', name: 'Matrices and Calculus', credits: 4, type: 'theory' },
      { code: 'PH3151', name: 'Engineering Physics', credits: 3, type: 'theory' },
      { code: 'CY3151', name: 'Engineering Chemistry', credits: 3, type: 'theory' },
      { code: 'CS3151', name: 'Programming for Problem Solving', credits: 3, type: 'theory' },
      { code: 'GE3151', name: 'Problem Solving and Python Programming', credits: 3, type: 'theory' },
      { code: 'GE3152', name: 'Heritage of Tamils', credits: 1, type: 'mandatory' },
      { code: 'GE3171', name: 'Problem Solving and Python Prog. Lab', credits: 2, type: 'lab' },
      { code: 'CS3152', name: 'Programming for Problem Solving Lab', credits: 2, type: 'lab' },
      { code: 'GE3172', name: 'Physics and Chemistry Lab', credits: 2, type: 'lab' },
      { code: 'HM3101', name: 'Constitution of India', credits: 0, type: 'mandatory' },
    ]
  },
  {
    sem: 2,
    subjects: [
      { code: 'MA3251', name: 'Statistics and Numerical Methods', credits: 4, type: 'theory' },
      { code: 'PH3251', name: 'Physics for Information Science', credits: 3, type: 'theory' },
      { code: 'BE3251', name: 'Basic Electrical and Electronics Engg', credits: 4, type: 'theory' },
      { code: 'GE3251', name: 'Engineering Graphics', credits: 4, type: 'theory' },
      { code: 'CS3251', name: 'Programming in C', credits: 3, type: 'theory' },
      { code: 'GE3272', name: 'Engineering Practices Lab', credits: 2, type: 'lab' },
      { code: 'CS3252', name: 'Programming in C Lab', credits: 2, type: 'lab' },
      { code: 'HM3201', name: 'Yoga for Human Excellence', credits: 0, type: 'mandatory' },
      { code: 'GE3451', name: 'Environmental Science and Engineering', credits: 0, type: 'mandatory' },
    ]
  },
  {
    sem: 3,
    subjects: [
      { code: 'MA3354', name: 'Discrete Mathematics', credits: 4, type: 'theory' },
      { code: 'CS3301', name: 'Data Structures and Algorithms', credits: 4, type: 'theory' },
      { code: 'CS3391', name: 'Object Oriented Programming', credits: 3, type: 'theory' },
      { code: 'EC3301', name: 'Digital Electronics', credits: 3, type: 'theory' },
      { code: 'CS3311', name: 'Data Structures Lab', credits: 2, type: 'lab' },
      { code: 'CS3381', name: 'Database Management Systems Lab', credits: 2, type: 'lab' },
      { code: 'GE3351', name: 'Environmental Sciences and Sustainability', credits: 3, type: 'mandatory' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'CS3491', name: 'Artificial Intelligence and Machine Learng', credits: 4, type: 'theory' },
      { code: 'CS3492', name: 'Database Management Systems', credits: 4, type: 'theory' },
      { code: 'CS3401', name: 'Algorithms', credits: 3, type: 'theory' },
      { code: 'CS3451', name: 'Introduction to Operating Systems', credits: 3, type: 'theory' },
      { code: 'CS3411', name: 'Operating Systems Lab', credits: 2, type: 'lab' },
      { code: 'CS3461', name: 'Full Stack Development Lab', credits: 2, type: 'lab' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: csePEOptions },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'CS3591', name: 'Computer Networks', credits: 3, type: 'theory' },
      { code: 'CS3551', name: 'Distributed Computing', credits: 3, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: csePEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: csePEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
      { code: 'CS3511', name: 'Mini Project', credits: 2, type: 'project' },
      { code: 'CS3581', name: 'Computer Networks Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'CS3661', name: 'Web Technologies', credits: 3, type: 'theory' },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: csePEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: csePEOptions },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: OEPoolII },
      { code: 'HS3651', name: 'Professional Development', credits: 3, type: 'mandatory' },
      { code: 'CS3611', name: 'Project Phase I', credits: 2, type: 'project' },
      { code: 'CS3681', name: 'Security Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'HS3751', name: 'Human Values and Ethics', credits: 2, type: 'mandatory' },
      { code: 'MGT-EL', name: 'Management Elective', credits: 3, type: 'theory', options: ManagementElectivePool },
      { code: 'OE-III', name: 'Open Elective III', credits: 3, type: 'elective_oe', options: OEPoolIII },
      { code: 'OE-IV', name: 'Open Elective IV', credits: 3, type: 'elective_oe', options: OEPoolIV },
      { code: 'PE-VI', name: 'Professional Elective VI', credits: 3, type: 'elective_pe', options: csePEOptions },
      { code: 'CS3711', name: 'Project Work / Internship', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'CS3811', name: 'Project Work / Internship', credits: 10, type: 'project' }
    ]
  }
];
