import { Semester, Subject } from '../types';

const eee17PEOptions: Subject[] = [
  { code: 'EE8001', name: 'Power Quality', credits: 3, type: 'elective_pe' },
  { code: 'EE8002', name: 'Flexible AC Transmission Systems', credits: 3, type: 'elective_pe' },
  { code: 'EE8003', name: 'Smart Grid', credits: 3, type: 'elective_pe' },
  { code: 'EE8004', name: 'Biomedical Instrumentation', credits: 3, type: 'elective_pe' },
  { code: 'EE8005', name: 'Embedded Systems', credits: 3, type: 'elective_pe' },
];

const eee17OEOptions: Subject[] = [
  { code: 'OIE751', name: 'Robotics', credits: 3, type: 'elective_oe' },
  { code: 'OME751', name: 'Design of Experiments', credits: 3, type: 'elective_oe' },
  { code: 'OME754', name: 'Industrial Safety', credits: 3, type: 'elective_oe' },
];

export const r2017_eee: Semester[] = [
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
      { code: 'MA8352', name: 'Linear Algebra and PDE', credits: 4, type: 'theory' },
      { code: 'EE8301', name: 'Circuit Theory', credits: 4, type: 'theory' },
      { code: 'EE8302', name: 'Electromagnetic Theory', credits: 3, type: 'theory' },
      { code: 'EE8391', name: 'Electronic Devices & Circuits', credits: 3, type: 'theory' },
      { code: 'EE8351', name: 'Electrical Machines I', credits: 3, type: 'theory' },
      { code: 'EE8361', name: 'EE Lab', credits: 2, type: 'lab' },
      { code: 'EE8381', name: 'EDC Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'MA8402', name: 'PQT', credits: 4, type: 'theory' },
      { code: 'EE8401', name: 'Electrical Machines II', credits: 4, type: 'theory' },
      { code: 'EE8451', name: 'Control Systems', credits: 4, type: 'theory' },
      { code: 'EE8402', name: 'Measurements & Instrumentation', credits: 3, type: 'theory' },
      { code: 'EE8491', name: 'Power Systems I', credits: 3, type: 'theory' },
      { code: 'EE8411', name: 'CS Lab', credits: 2, type: 'lab' },
      { code: 'EE8461', name: 'Machines Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'EE8501', name: 'Power Systems II', credits: 3, type: 'theory' },
      { code: 'EE8551', name: 'Power Electronics', credits: 4, type: 'theory' },
      { code: 'EE8502', name: 'Microprocessors & Microcontrollers', credits: 4, type: 'theory' },
      { code: 'EE8591', name: 'Digital Signal Processing', credits: 3, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: eee17PEOptions },
      { code: 'EE8511', name: 'PE Lab', credits: 2, type: 'lab' },
      { code: 'EE8561', name: 'Micro Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'EE8601', name: 'Solid State Drives', credits: 4, type: 'theory' },
      { code: 'EE8651', name: 'Protection & Switchgear', credits: 3, type: 'theory' },
      { code: 'EE8602', name: 'Design of Electrical Machines', credits: 4, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: eee17PEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: eee17PEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: eee17OEOptions },
      { code: 'EE8681', name: 'Power Systems Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: eee17PEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: eee17PEOptions },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: eee17OEOptions },
      { code: 'EE8711', name: 'Project Phase I', credits: 2, type: 'project' },
      { code: 'EE8761', name: 'Simulation Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'EE8811', name: 'Project Phase II', credits: 6, type: 'project' },
      { code: 'MG8591', name: 'Principles of Mgmt', credits: 3, type: 'theory' },
    ]
  }
];
