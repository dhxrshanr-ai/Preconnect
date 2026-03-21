import { Semester, Subject } from '../types';
import { ManagementElectivePool, OEPoolI, OEPoolII, OEPoolIII, OEPoolIV } from './shared_r2021';

const aimlPEOptions: Subject[] = [
  { code: 'CAI331', name: 'Bayesian Machine Learning', credits: 3, type: 'elective_pe' },
  { code: 'CAI332', name: 'Neural Architecture Search', credits: 3, type: 'elective_pe' },
  { code: 'CAI333', name: 'Transfer Learning', credits: 3, type: 'elective_pe' },
  { code: 'CAI334', name: 'Multimodal AI', credits: 3, type: 'elective_pe' },
  { code: 'CAI335', name: 'AI in Cybersecurity', credits: 3, type: 'elective_pe' },
  { code: 'CAI336', name: 'Speech and Audio Processing', credits: 3, type: 'elective_pe' },
  { code: 'CAI337', name: 'Medical Image Analysis', credits: 3, type: 'elective_pe' },
  { code: 'CAI338', name: 'Intelligent Transportation Systems', credits: 3, type: 'elective_pe' },
  { code: 'CAI339', name: 'Social Media Analytics', credits: 3, type: 'elective_pe' },
];

export const r2021_aiml: Semester[] = [
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
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: aimlPEOptions },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'AM3501', name: 'Machine Learning Techniques', credits: 4, type: 'theory' },
      { code: 'AM3551', name: 'Deep Learning', credits: 4, type: 'theory' },
      { code: 'AM3502', name: 'Natural Language Processing', credits: 3, type: 'theory' },
      { code: 'AM3503', name: 'Computer Vision', credits: 4, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: aimlPEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: aimlPEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'AM3601', name: 'Reinforcement Learning', credits: 3, type: 'theory' },
      { code: 'AM3651', name: 'AI for Robotics', credits: 3, type: 'theory' },
      { code: 'AM3602', name: 'Explainable AI', credits: 3, type: 'theory' },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: aimlPEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: aimlPEOptions },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: OEPoolII },
      { code: 'HS3651', name: 'Professional Development', credits: 3, type: 'mandatory' },
      { code: 'CS3611', name: 'Project Phase I', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'HS3751', name: 'Human Values and Ethics', credits: 2, type: 'mandatory' },
      { code: 'MGT-EL', name: 'Management Elective', credits: 3, type: 'theory', options: ManagementElectivePool },
      { code: 'OE-III', name: 'Open Elective III', credits: 3, type: 'elective_oe', options: OEPoolIII },
      { code: 'OE-IV', name: 'Open Elective IV', credits: 3, type: 'elective_oe', options: OEPoolIV },
      { code: 'PE-VI', name: 'Professional Elective VI', credits: 3, type: 'elective_pe', options: aimlPEOptions },
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
