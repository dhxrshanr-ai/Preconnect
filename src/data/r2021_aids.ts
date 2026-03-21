import { Semester, Subject } from '../types';
import { ManagementElectivePool, OEPoolI, OEPoolII, OEPoolIII, OEPoolIV } from './shared_r2021';

const aidsPEOptions: Subject[] = [
  { code: 'CAD331', name: 'Explainable AI', credits: 3, type: 'elective_pe' },
  { code: 'CAD332', name: 'Graph Neural Networks', credits: 3, type: 'elective_pe' },
  { code: 'CAD333', name: 'Federated Learning', credits: 3, type: 'elective_pe' },
  { code: 'CAD334', name: 'Generative AI', credits: 3, type: 'elective_pe' },
  { code: 'CAD335', name: 'AI Ethics and Governance', credits: 3, type: 'elective_pe' },
  { code: 'CAD336', name: 'Autonomous Systems', credits: 3, type: 'elective_pe' },
  { code: 'CAD337', name: 'Digital Twins', credits: 3, type: 'elective_pe' },
  { code: 'CAD338', name: 'Healthcare Informatics', credits: 3, type: 'elective_pe' },
  { code: 'CAD339', name: 'Financial Technology (FinTech)', credits: 3, type: 'elective_pe' },
  { code: 'CAD340', name: 'Knowledge Graphs and Ontologies', credits: 3, type: 'elective_pe' },
  { code: 'CAD341', name: 'Time Series Analysis', credits: 3, type: 'elective_pe' },
  { code: 'CAD342', name: 'Edge AI and TinyML', credits: 3, type: 'elective_pe' },
];

export const r2021_aids: Semester[] = [
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
      { code: 'AD3301', name: 'Probability and Statistics', credits: 4, type: 'theory' },
      { code: 'AD3302', name: 'Data Structures', credits: 4, type: 'theory' },
      { code: 'AD3391', name: 'Object Oriented Programming with Java', credits: 3, type: 'theory' },
      { code: 'EC3301', name: 'Digital Electronics', credits: 3, type: 'theory' },
      { code: 'AD3311', name: 'Data Structures Lab', credits: 2, type: 'lab' },
      { code: 'AD3312', name: 'OOP Lab', credits: 2, type: 'lab' },
      { code: 'GE3361', name: 'Professional Development', credits: 1, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'AD3401', name: 'Machine Learning', credits: 4, type: 'theory' },
      { code: 'AD3491', name: 'Database Management Systems', credits: 4, type: 'theory' },
      { code: 'AD3402', name: 'Big Data Analytics', credits: 3, type: 'theory' },
      { code: 'AD3451', name: 'Python for Data Science', credits: 3, type: 'theory' },
      { code: 'GE3451', name: 'Environmental Sciences and Sustainability', credits: 2, type: 'mandatory' },
      { code: 'AD3411', name: 'Machine Learning Lab', credits: 2, type: 'lab' },
      { code: 'AD3461', name: 'Big Data Lab', credits: 2, type: 'lab' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: aidsPEOptions },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'AD3501', name: 'Deep Learning', credits: 4, type: 'theory' },
      { code: 'AD3551', name: 'Natural Language Processing', credits: 3, type: 'theory' },
      { code: 'AD3502', name: 'Computer Vision', credits: 4, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: aidsPEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: aidsPEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
      { code: 'AD3511', name: 'Mini Project', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'AD3601', name: 'Reinforcement Learning', credits: 3, type: 'theory' },
      { code: 'AD3651', name: 'Data Visualization', credits: 3, type: 'theory' },
      { code: 'AD3602', name: 'Cloud Computing for Data Science', credits: 3, type: 'theory' },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: aidsPEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: aidsPEOptions },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: OEPoolII },
      { code: 'HS3651', name: 'Professional Development', credits: 3, type: 'mandatory' },
      { code: 'AD3611', name: 'Project Phase I', credits: 2, type: 'project' },
      { code: 'AD3681', name: 'AI Systems Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'HS3751', name: 'Human Values and Ethics', credits: 2, type: 'mandatory' },
      { code: 'MGT-EL', name: 'Management Elective', credits: 3, type: 'theory', options: ManagementElectivePool },
      { code: 'OE-III', name: 'Open Elective III', credits: 3, type: 'elective_oe', options: OEPoolIII },
      { code: 'OE-IV', name: 'Open Elective IV', credits: 3, type: 'elective_oe', options: OEPoolIV },
      { code: 'PE-VI', name: 'Professional Elective VI', credits: 3, type: 'elective_pe', options: aidsPEOptions },
      { code: 'AD3711', name: 'Project Work / Internship', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'AD3811', name: 'Project Work / Internship', credits: 10, type: 'project' }
    ]
  }
];
