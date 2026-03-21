import { Semester, Subject } from '../types';

const civil17PEOptions: Subject[] = [
  { code: 'CE8001', name: 'Ground Improvement Techniques', credits: 3, type: 'elective_pe' },
  { code: 'CE8002', name: 'Introduction to Soil Dynamics', credits: 3, type: 'elective_pe' },
  { code: 'CE8003', name: 'Rock Engineering', credits: 3, type: 'elective_pe' },
  { code: 'CE8004', name: 'Urban Planning and Development', credits: 3, type: 'elective_pe' },
  { code: 'CE8005', name: 'Air Pollution and Control Engineering', credits: 3, type: 'elective_pe' },
];

const civil17OEOptions: Subject[] = [
  { code: 'OIE751', name: 'Robotics', credits: 3, type: 'elective_oe' },
  { code: 'OME751', name: 'Design of Experiments', credits: 3, type: 'elective_oe' },
  { code: 'OME754', name: 'Industrial Safety', credits: 3, type: 'elective_oe' },
];

export const r2017_civil: Semester[] = [
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
      { code: 'MA8351', name: 'DM', credits: 4, type: 'theory' },
      { code: 'CE8301', name: 'Mechanics of Solids', credits: 3, type: 'theory' },
      { code: 'CE8302', name: 'Fluid Mechanics', credits: 4, type: 'theory' },
      { code: 'CE8391', name: 'Surveying', credits: 4, type: 'theory' },
      { code: 'CE8392', name: 'Construction Materials', credits: 3, type: 'theory' },
      { code: 'CE8381', name: 'Surveying Lab', credits: 3, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'MA8402', name: 'PQT', credits: 4, type: 'theory' },
      { code: 'CE8401', name: 'Structural Analysis I', credits: 4, type: 'theory' },
      { code: 'CE8491', name: 'Hydraulics', credits: 4, type: 'theory' },
      { code: 'CE8402', name: 'Soil Mechanics', credits: 4, type: 'theory' },
      { code: 'CE8403', name: 'Environmental Engg I', credits: 3, type: 'theory' },
      { code: 'CE8411', name: 'Env. Engg Lab', credits: 2, type: 'lab' },
      { code: 'CE8461', name: 'Soil Mech Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'CE8501', name: 'Structural Analysis II', credits: 4, type: 'theory' },
      { code: 'CE8551', name: 'Design of RC Structures', credits: 4, type: 'theory' },
      { code: 'CE8502', name: 'Foundation Engineering', credits: 3, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: civil17PEOptions },
      { code: 'CE8511', name: 'CAD Lab', credits: 2, type: 'lab' },
      { code: 'CE8581', name: 'Concrete & Highway Materials Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'CE8601', name: 'Design of Steel Structures', credits: 4, type: 'theory' },
      { code: 'CE8651', name: 'Environmental Engg II', credits: 3, type: 'theory' },
      { code: 'CE8602', name: 'Estimation, Costing & Valuation', credits: 3, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: civil17PEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: civil17PEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: civil17OEOptions },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: civil17PEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: civil17PEOptions },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: civil17OEOptions },
      { code: 'CE8711', name: 'Project Phase I', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'CE8811', name: 'Project Phase II', credits: 6, type: 'project' },
      { code: 'MG8591', name: 'Principles of Mgmt', credits: 3, type: 'theory' },
    ]
  }
];
