import { Semester, Subject } from '../types';

const ece17PEOptions: Subject[] = [
  { code: 'EC8071', name: 'Cognitive Radio', credits: 3, type: 'elective_pe' },
  { code: 'EC8072', name: 'Electro-Magnetic Interference and Compatibility', credits: 3, type: 'elective_pe' },
  { code: 'EC8073', name: 'Medical Electronics', credits: 3, type: 'elective_pe' },
  { code: 'EC8001', name: 'MEMS and NEMS', credits: 3, type: 'elective_pe' },
  { code: 'EC8002', name: 'Multimedia Compression and Communication', credits: 3, type: 'elective_pe' },
  { code: 'EC8003', name: 'CMOS Analog IC Design', credits: 3, type: 'elective_pe' },
  { code: 'EC8004', name: 'Wireless Networks', credits: 3, type: 'elective_pe' },
  { code: 'EC8093', name: 'Digital Image Processing', credits: 3, type: 'elective_pe' },
  { code: 'EC8094', name: 'Satellite Communication', credits: 3, type: 'elective_pe' },
  { code: 'EC8095', name: 'VLSI Design', credits: 3, type: 'elective_pe' },
];

const ece17OEOptions: Subject[] = [
  { code: 'OIE751', name: 'Robotics', credits: 3, type: 'elective_oe' },
  { code: 'OME751', name: 'Design of Experiments', credits: 3, type: 'elective_oe' },
  { code: 'OME754', name: 'Industrial Safety', credits: 3, type: 'elective_oe' },
  { code: 'OBT751', name: 'Analytical Methods and Instrumentation', credits: 3, type: 'elective_oe' },
  { code: 'OIT752', name: 'Cloud Computing', credits: 3, type: 'elective_oe' },
];

export const r2017_ece: Semester[] = [
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
      { code: 'EC8301', name: 'Devices & Circuits', credits: 3, type: 'theory' },
      { code: 'EC8302', name: 'Digital Circuits', credits: 3, type: 'theory' },
      { code: 'EC8391', name: 'Signals and Systems', credits: 4, type: 'theory' },
      { code: 'EC8303', name: 'Analog Circuits', credits: 3, type: 'theory' },
      { code: 'EC8361', name: 'Circuits Lab', credits: 3, type: 'lab' },
      { code: 'EC8381', name: 'Comm Skills Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'MA8402', name: 'PQT', credits: 4, type: 'theory' },
      { code: 'EC8401', name: 'Electronics Circuits', credits: 3, type: 'theory' },
      { code: 'EC8451', name: 'Electromagnetic Fields', credits: 3, type: 'theory' },
      { code: 'EC8491', name: 'Communication Theory', credits: 3, type: 'theory' },
      { code: 'EC8452', name: 'Linear Integrated Circuits', credits: 3, type: 'theory' },
      { code: 'EC8461', name: 'LIC Lab', credits: 2, type: 'lab' },
      { code: 'EC8462', name: 'Comm Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'EC8501', name: 'Digital Communication', credits: 3, type: 'theory' },
      { code: 'EC8551', name: 'Transmission Lines', credits: 3, type: 'theory' },
      { code: 'EC8502', name: 'Computer Networks', credits: 3, type: 'theory' },
      { code: 'EC8552', name: 'VLSI Design', credits: 3, type: 'theory' },
      { code: 'EC8503', name: 'RF & Microwave Engineering', credits: 3, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: ece17PEOptions },
      { code: 'EC8581', name: 'VLSI Lab', credits: 2, type: 'lab' },
      { code: 'EC8561', name: 'Communication Systems Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'EC8601', name: 'Wireless Communication', credits: 3, type: 'theory' },
      { code: 'EC8651', name: 'Medical Electronics', credits: 3, type: 'theory' },
      { code: 'EC8691', name: 'Embedded Systems', credits: 3, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: ece17PEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: ece17PEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: ece17OEOptions },
      { code: 'EC8681', name: 'Project Phase I', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'EC8711', name: 'Project Phase II', credits: 6, type: 'project' },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: ece17PEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: ece17PEOptions },
      { code: 'EC8761', name: 'Embedded Lab', credits: 2, type: 'lab' },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: ece17OEOptions },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'EC8811', name: 'Final Project', credits: 6, type: 'project' },
      { code: 'MG8591', name: 'Principles of Mgmt', credits: 3, type: 'theory' },
    ]
  }
];
