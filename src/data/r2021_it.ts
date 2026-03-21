import { Semester, Subject } from '../types';
import { ManagementElectivePool, OEPoolI, OEPoolII, OEPoolIII, OEPoolIV } from './shared_r2021';

const itPEOptions: Subject[] = [
  { code: 'CIT301', name: 'Big Data Technologies', credits: 3, type: 'elective_pe' },
  { code: 'CIT302', name: 'Internet of Things', credits: 3, type: 'elective_pe' },
  { code: 'CIT303', name: 'Mobile Application Development', credits: 3, type: 'elective_pe' },
  { code: 'CIT304', name: 'Natural Language Processing', credits: 3, type: 'elective_pe' },
  { code: 'CIT305', name: 'Machine Learning', credits: 3, type: 'elective_pe' },
  { code: 'CIT306', name: 'Blockchain Technology', credits: 3, type: 'elective_pe' },
  { code: 'CIT307', name: 'Cyber Security', credits: 3, type: 'elective_pe' },
  { code: 'CIT308', name: 'Cloud Architecture and Services', credits: 3, type: 'elective_pe' },
  { code: 'CIT309', name: 'Full Stack Development', credits: 3, type: 'elective_pe' },
  { code: 'CIT310', name: 'DevOps and Agile', credits: 3, type: 'elective_pe' },
  { code: 'CIT311', name: 'Data Warehousing and Mining', credits: 3, type: 'elective_pe' },
  { code: 'CIT312', name: 'Compiler Design', credits: 3, type: 'elective_pe' },
  { code: 'CIT313', name: 'Embedded Systems', credits: 3, type: 'elective_pe' },
  { code: 'CIT314', name: 'Human Computer Interaction', credits: 3, type: 'elective_pe' },
];

export const r2021_it: Semester[] = [
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
      { code: 'PH3256', name: 'Physics for Information Science', credits: 3, type: 'theory' },
      { code: 'BE3251', name: 'Basic Electrical and Electronics Engg', credits: 4, type: 'theory' },
      { code: 'GE3251', name: 'Engineering Graphics', credits: 4, type: 'theory' },
      { code: 'CS3251', name: 'Programming in C', credits: 3, type: 'theory' },
      { code: 'GE3252', name: 'Tamils and Technology', credits: 1, type: 'mandatory' },
      { code: 'GE3271', name: 'Engineering Practices Laboratory', credits: 2, type: 'lab' },
      { code: 'CS3252', name: 'Programming in C Lab', credits: 2, type: 'lab' },
      { code: 'GE3272', name: 'Communication Lab / Foreign Language', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 3,
    subjects: [
      { code: 'MA3354', name: 'Discrete Mathematics', credits: 4, type: 'theory' },
      { code: 'IT3301', name: 'Data Structures and Algorithms', credits: 4, type: 'theory' },
      { code: 'IT3391', name: 'Object Oriented Programming', credits: 3, type: 'theory' },
      { code: 'CS3353', name: 'C Programming and Data Structures', credits: 3, type: 'theory' },
      { code: 'EC3301', name: 'Digital Electronics', credits: 3, type: 'theory' },
      { code: 'IT3311', name: 'Data Structures Lab', credits: 2, type: 'lab' },
      { code: 'IT3312', name: 'OOP Lab', credits: 2, type: 'lab' },
      { code: 'GE3361', name: 'Professional Development', credits: 1, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'IT3491', name: 'Artificial Intelligence', credits: 3, type: 'theory' },
      { code: 'IT3401', name: 'Database Management Systems', credits: 4, type: 'theory' },
      { code: 'IT3451', name: 'Operating Systems', credits: 3, type: 'theory' },
      { code: 'IT3402', name: 'Computer Organisation and Architecture', credits: 3, type: 'theory' },
      { code: 'GE3451', name: 'Environmental Sciences and Sustainability', credits: 2, type: 'mandatory' },
      { code: 'IT3411', name: 'Database Management Systems Lab', credits: 2, type: 'lab' },
      { code: 'IT3461', name: 'Operating Systems Lab', credits: 2, type: 'lab' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: itPEOptions },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'IT3501', name: 'Computer Networks', credits: 3, type: 'theory' },
      { code: 'IT3551', name: 'Web Technologies', credits: 3, type: 'theory' },
      { code: 'IT3502', name: 'Software Engineering', credits: 3, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: itPEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: itPEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
      { code: 'IT3511', name: 'Mini Project', credits: 2, type: 'project' },
      { code: 'IT3581', name: 'Networks Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'IT3601', name: 'Cloud Computing', credits: 3, type: 'theory' },
      { code: 'IT3651', name: 'Information Security', credits: 3, type: 'theory' },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: itPEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: itPEOptions },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: OEPoolII },
      { code: 'HS3651', name: 'Professional Development', credits: 3, type: 'mandatory' },
      { code: 'IT3611', name: 'Project Phase I', credits: 2, type: 'project' },
      { code: 'IT3681', name: 'Security Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'HS3751', name: 'Human Values and Ethics', credits: 2, type: 'mandatory' },
      { code: 'MGT-EL', name: 'Management Elective', credits: 3, type: 'theory', options: ManagementElectivePool },
      { code: 'OE-III', name: 'Open Elective III', credits: 3, type: 'elective_oe', options: OEPoolIII },
      { code: 'OE-IV', name: 'Open Elective IV', credits: 3, type: 'elective_oe', options: OEPoolIV },
      { code: 'PE-VI', name: 'Professional Elective VI', credits: 3, type: 'elective_pe', options: itPEOptions },
      { code: 'IT3711', name: 'Project Work / Internship', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'IT3811', name: 'Project Work / Internship', credits: 10, type: 'project' }
    ]
  }
];
