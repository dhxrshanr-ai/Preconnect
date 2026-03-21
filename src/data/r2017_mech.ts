import { Semester, Subject } from '../types';

const mech17PEOptions: Subject[] = [
  { code: 'ME8071', name: 'Automobile Engineering', credits: 3, type: 'elective_pe' },
  { code: 'ME8072', name: 'Renewable Sources of Energy', credits: 3, type: 'elective_pe' },
  { code: 'ME8073', name: 'Unconventional Machining Processes', credits: 3, type: 'elective_pe' },
  { code: 'ME8074', name: 'Vibration and Noise Control', credits: 3, type: 'elective_pe' },
  { code: 'ME8091', name: 'Automobile Engineering', credits: 3, type: 'elective_pe' },
];

const mech17OEOptions: Subject[] = [
  { code: 'OIE751', name: 'Robotics', credits: 3, type: 'elective_oe' },
  { code: 'OME751', name: 'Design of Experiments', credits: 3, type: 'elective_oe' },
  { code: 'OME754', name: 'Industrial Safety', credits: 3, type: 'elective_oe' },
];

export const r2017_mech: Semester[] = [
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
      { code: 'ME8391', name: 'Engineering Thermodynamics', credits: 4, type: 'theory' },
      { code: 'CE8394', name: 'Fluid Mechanics & Machinery', credits: 4, type: 'theory' },
      { code: 'ME8392', name: 'Engg. Materials & Metallurgy', credits: 3, type: 'theory' },
      { code: 'ME8381', name: 'Mfg. Tech Lab I', credits: 2, type: 'lab' },
      { code: 'ME8382', name: 'Fluid Mechanics Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'MA8402', name: 'PQT', credits: 4, type: 'theory' },
      { code: 'ME8491', name: 'Kinematics', credits: 4, type: 'theory' },
      { code: 'ME8492', name: 'Mfg. Tech II', credits: 3, type: 'theory' },
      { code: 'ME8493', name: 'Thermal Engineering I', credits: 4, type: 'theory' },
      { code: 'ME8494', name: 'Strength of Materials', credits: 4, type: 'theory' },
      { code: 'ME8411', name: 'Kinematics Lab', credits: 2, type: 'lab' },
      { code: 'ME8461', name: 'Mfg. Tech Lab II', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'ME8501', name: 'Dynamics of Machinery', credits: 4, type: 'theory' },
      { code: 'ME8551', name: 'Metrology & Measurements', credits: 3, type: 'theory' },
      { code: 'ME8502', name: 'Heat Transfer', credits: 4, type: 'theory' },
      { code: 'ME8591', name: 'Design of Machine Elements I', credits: 4, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: mech17PEOptions },
      { code: 'ME8511', name: 'Thermal Engg Lab I', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'ME8601', name: 'Design of Machine Elements II', credits: 3, type: 'theory' },
      { code: 'ME8651', name: 'Computer Aided Design', credits: 3, type: 'theory' },
      { code: 'ME8602', name: 'Finite Element Analysis', credits: 3, type: 'theory' },
      { code: 'ME8603', name: 'Mechatronics & IOT', credits: 3, type: 'theory' },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: mech17PEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: mech17PEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: mech17OEOptions },
      { code: 'ME8661', name: 'CAD/CAM Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: mech17PEOptions },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: mech17PEOptions },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: mech17OEOptions },
      { code: 'ME8711', name: 'Project Phase I', credits: 2, type: 'project' },
      { code: 'ME8761', name: 'Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'ME8811', name: 'Project Phase II', credits: 6, type: 'project' },
      { code: 'MG8591', name: 'Principles of Mgmt', credits: 3, type: 'theory' },
    ]
  }
];
