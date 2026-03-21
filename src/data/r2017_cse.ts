import { Semester, Subject } from '../types';

const cse17PEOptions: Subject[] = [
  { code: 'CS8071', name: 'Cloud Computing', credits: 3, type: 'elective_pe' },
  { code: 'CS8072', name: 'Cryptography and Cyber Security', credits: 3, type: 'elective_pe' },
  { code: 'CS8073', name: 'Distributed Computing', credits: 3, type: 'elective_pe' },
  { code: 'CS8074', name: 'Human Computer Interaction', credits: 3, type: 'elective_pe' },
  { code: 'CS8081', name: 'Internet of Things', credits: 3, type: 'elective_pe' },
  { code: 'CS8082', name: 'Information Retrieval', credits: 3, type: 'elective_pe' },
  { code: 'CS8083', name: 'Multi-Core Architectures', credits: 3, type: 'elective_pe' },
  { code: 'CS8084', name: 'Agile Software Development', credits: 3, type: 'elective_pe' },
  { code: 'CS8091', name: 'Big Data Analytics', credits: 3, type: 'elective_pe' },
  { code: 'CS8092', name: 'Computer Graphics and Multimedia', credits: 3, type: 'elective_pe' },
  { code: 'CS8093', name: 'Deep Learning', credits: 3, type: 'elective_pe' },
  { code: 'CS8094', name: 'Software Testing', credits: 3, type: 'elective_pe' },
  { code: 'CS8095', name: 'Natural Language Processing', credits: 3, type: 'elective_pe' },
  { code: 'CS8096', name: 'Cyber Security', credits: 3, type: 'elective_pe' },
  { code: 'CS8097', name: 'Robotic Process Automation', credits: 3, type: 'elective_pe' },
  { code: 'CS8098', name: 'Principles of Video and Image Processing', credits: 3, type: 'elective_pe' },
];

const cse17OEOptions: Subject[] = [
  { code: 'MG8591', name: 'Principles of Management', credits: 3, type: 'elective_oe' },
  { code: 'GE8071', name: 'Disaster Management', credits: 3, type: 'elective_oe' },
  { code: 'GE8073', name: 'Fundamentals of Nano Science', credits: 3, type: 'elective_oe' },
  { code: 'GE8074', name: 'Human Rights', credits: 3, type: 'elective_oe' },
  { code: 'GE8076', name: 'Professional Ethics in Engineering', credits: 3, type: 'elective_oe' },
];

export const r2017_cse: Semester[] = [
  {
    sem: 1,
    subjects: [
      { code: 'MA8151', name: 'Engineering Mathematics I', credits: 4, type: 'theory' },
      { code: 'PH8151', name: 'Engineering Physics', credits: 3, type: 'theory' },
      { code: 'CY8151', name: 'Engineering Chemistry', credits: 3, type: 'theory' },
      { code: 'GE8151', name: 'Problem Solving and Python Programming', credits: 3, type: 'theory' },
      { code: 'GE8152', name: 'Engineering Graphics', credits: 4, type: 'theory' },
      { code: 'GE8161', name: 'Problem Solving and Python Prog. Lab', credits: 2, type: 'lab' },
      { code: 'BS8161', name: 'Physics and Chemistry Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 2,
    subjects: [
      { code: 'MA8251', name: 'Engineering Mathematics II', credits: 4, type: 'theory' },
      { code: 'PH8251', name: 'Materials Science', credits: 3, type: 'theory' },
      { code: 'BE8255', name: 'Basic Electrical Electronics & Measurement', credits: 4, type: 'theory' },
      { code: 'GE8291', name: 'Environmental Science and Engineering', credits: 2, type: 'theory' },
      { code: 'CS8251', name: 'Programming in C', credits: 3, type: 'theory' },
      { code: 'GE8261', name: 'Engineering Practices Lab', credits: 2, type: 'lab' },
      { code: 'CS8261', name: 'C Programming Lab', credits: 2, type: 'lab' },
      { code: 'GE8292', name: 'Total Quality Management', credits: 0, type: 'mandatory' },
    ]
  },
  {
    sem: 3,
    subjects: [
      { code: 'MA8351', name: 'Discrete Mathematics', credits: 4, type: 'theory' },
      { code: 'CS8301', name: 'Digital Principles and System Design', credits: 3, type: 'theory' },
      { code: 'CS8391', name: 'Object Oriented Programming', credits: 3, type: 'theory' },
      { code: 'CS8392', name: 'Operating Systems', credits: 3, type: 'theory' },
      { code: 'EC8395', name: 'Communication Engineering', credits: 3, type: 'theory' },
      { code: 'CS8381', name: 'Digital Systems Lab', credits: 2, type: 'lab' },
      { code: 'CS8383', name: 'Object Oriented Programming Lab', credits: 2, type: 'lab' },
      { code: 'GE8363', name: 'Social Engineering', credits: 0, type: 'mandatory' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'MA8402', name: 'Probability and Queueing Theory', credits: 4, type: 'theory' },
      { code: 'CS8491', name: 'Computer Architecture', credits: 3, type: 'theory' },
      { code: 'CS8492', name: 'Database Management Systems', credits: 3, type: 'theory' },
      { code: 'CS8451', name: 'Design and Analysis of Algorithms', credits: 3, type: 'theory' },
      { code: 'CS8493', name: 'Operating Systems (Lab integrated)', credits: 3, type: 'theory' },
      { code: 'CS8481', name: 'Database Management Systems Lab', credits: 2, type: 'lab' },
      { code: 'CS8461', name: 'Mini Project', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'CS8501', name: 'Theory of Computation', credits: 3, type: 'theory' },
      { code: 'CS8592', name: 'Object Oriented Analysis and Design', credits: 3, type: 'theory' },
      { code: 'CS8591', name: 'Computer Networks', credits: 3, type: 'theory' },
      { code: 'CS8502', name: 'Compiler Design', credits: 3, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: cse17PEOptions },
      { code: 'CS8581', name: 'Networks Lab', credits: 2, type: 'lab' },
      { code: 'CS8561', name: 'Compiler Design Lab', credits: 2, type: 'lab' },
      { code: 'HS8581', name: 'Communication Skills Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'CS8651', name: 'Internet Programming', credits: 3, type: 'theory' },
      { code: 'CS8601', name: 'Mobile Computing', credits: 3, type: 'theory' },
      { code: 'CS8602', name: 'Compiler Design', credits: 3, type: 'theory' },
      { code: 'CS8691', name: 'Artificial Intelligence', credits: 3, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: cse17PEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: cse17OEOptions },
      { code: 'CS8681', name: 'Mobile and Web Programming Lab', credits: 2, type: 'lab' },
      { code: 'GE8077', name: 'Total Quality Management or Constitution of India', credits: 0, type: 'mandatory' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'CS8791', name: 'Cloud Computing', credits: 3, type: 'theory' },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: cse17PEOptions },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: cse17PEOptions },
      { code: 'CS8711', name: 'Project Work Phase I', credits: 2, type: 'project' },
      { code: 'CS8781', name: 'Security Lab', credits: 2, type: 'lab' },
      { code: 'CS8791L', name: 'Open Source Lab', credits: 2, type: 'lab' },
      { code: 'MG8591', name: 'Principles of Management', credits: 3, type: 'theory' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'GE8811', name: 'Project Work Phase II', credits: 10, type: 'project' },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: cse17PEOptions },
    ]
  }
];
