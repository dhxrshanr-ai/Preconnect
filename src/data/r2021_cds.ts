import { Semester, Subject } from '../types';
import { ManagementElectivePool, OEPoolI, OEPoolII, OEPoolIII, OEPoolIV } from './shared_r2021';

const cdsPEOptions: Subject[] = [
  { code: 'CDS331', name: 'Advanced SQL and NoSQL Databases', credits: 3, type: 'elective_pe' },
  { code: 'CDS332', name: 'Real-time Data Streaming (Kafka)', credits: 3, type: 'elective_pe' },
  { code: 'CDS333', name: 'Data Engineering Pipelines', credits: 3, type: 'elective_pe' },
  { code: 'CDS334', name: 'Applied Time Series Forecasting', credits: 3, type: 'elective_pe' },
  { code: 'CDS335', name: 'Recommender Systems', credits: 3, type: 'elective_pe' },
  { code: 'CDS336', name: 'Text Analytics', credits: 3, type: 'elective_pe' },
  { code: 'CDS337', name: 'Social Network Analysis', credits: 3, type: 'elective_pe' },
  { code: 'CDS338', name: 'Geospatial Data Science', credits: 3, type: 'elective_pe' },
  { code: 'CDS339', name: 'Quantum Computing for Data Science', credits: 3, type: 'elective_pe' },
];

export const r2021_cds: Semester[] = [
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
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: cdsPEOptions },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'CD3501', name: 'Statistical Data Analysis', credits: 4, type: 'theory' },
      { code: 'CD3551', name: 'Data Mining Techniques', credits: 3, type: 'theory' },
      { code: 'CD3502', name: 'Business Intelligence and Analytics', credits: 3, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: cdsPEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: cdsPEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'CD3601', name: 'Big Data Platforms (Hadoop/Spark)', credits: 4, type: 'theory' },
      { code: 'CD3651', name: 'Data Governance and Ethics', credits: 3, type: 'theory' },
      { code: 'CD3602', name: 'Predictive Analytics', credits: 3, type: 'theory' },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: cdsPEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: cdsPEOptions },
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
      { code: 'PE-VI', name: 'Professional Elective VI', credits: 3, type: 'elective_pe', options: cdsPEOptions },
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
