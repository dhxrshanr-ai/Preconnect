import { Semester, Subject } from '../types';
import {
  OEPoolI, OEPoolII, OEPoolIII, OEPoolIV,
  MandatoryCourseIPool, MandatoryCourseIIPool, ManagementElectivePool
} from './shared_r2021';

const eeePEOptions: Subject[] = [
  { code: 'CEE332', name: 'Smart Grids', credits: 3, type: 'elective_pe' },
  { code: 'CEE333', name: 'Power Quality', credits: 3, type: 'elective_pe' },
  { code: 'CEE334', name: 'Flexible AC Transmission Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEE335', name: 'High Voltage Engineering', credits: 3, type: 'elective_pe' },
  { code: 'CEE336', name: 'HVDC Transmission', credits: 3, type: 'elective_pe' },
  { code: 'CEE337', name: 'Wind Energy Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEE338', name: 'Solar Energy Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEE339', name: 'Energy Storage Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEE340', name: 'Power System Optimization', credits: 3, type: 'elective_pe' },
  { code: 'CEE341', name: 'Embedded Control Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEE342', name: 'Industrial Automation', credits: 3, type: 'elective_pe' },
  { code: 'CEE343', name: 'PLC and SCADA', credits: 3, type: 'elective_pe' },
  { code: 'CEE344', name: 'Internet of Things for Smart Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEE345', name: 'Digital Protection of Power Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEE346', name: 'Electric Vehicle Technology', credits: 3, type: 'elective_pe' },
  { code: 'CEE347', name: 'Robotics and Automation', credits: 3, type: 'elective_pe' },
  { code: 'CEE348', name: 'Machine Learning for Power Systems', credits: 3, type: 'elective_pe' },
];

export const r2021_eee: Semester[] = [
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
      { code: 'PH3254', name: 'Physics for Electronics', credits: 3, type: 'theory' },
      { code: 'BE3254', name: 'Basic Electrical & Electronics', credits: 3, type: 'theory' },
      { code: 'GE3251', name: 'Engineering Graphics', credits: 4, type: 'theory' },
      { code: 'EC3251', name: 'Circuit Analysis', credits: 4, type: 'theory' },
      { code: 'GE3252', name: 'Tamils and Technology', credits: 1, type: 'mandatory' },
      { code: 'GE3271', name: 'Engineering Practices Laboratory', credits: 2, type: 'lab' },
      { code: 'EC3271', name: 'Circuits Analysis Lab', credits: 1, type: 'lab' },
      { code: 'GE3272', name: 'Communication Lab / Foreign Language', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 3,
    subjects: [
      { code: 'MA3355', name: 'Random Processes and Linear Algebra', credits: 4, type: 'theory' },
      { code: 'EE3301', name: 'Electrical Circuit Analysis', credits: 4, type: 'theory' },
      { code: 'EE3391', name: 'Electromagnetic Theory', credits: 3, type: 'theory' },
      { code: 'EE3302', name: 'Electronic Devices and Circuits', credits: 3, type: 'theory' },
      { code: 'EE3393', name: 'Electrical Machines – I', credits: 3, type: 'theory' },
      { code: 'EE3311', name: 'Electric Circuits Analysis Lab', credits: 1.5, type: 'lab' },
      { code: 'EE3312', name: 'Electronic Devices and Circuits Lab', credits: 1.5, type: 'lab' },
      { code: 'GE3361', name: 'Professional Development', credits: 1, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'EE3401', name: 'Control Systems', credits: 4, type: 'theory' },
      { code: 'EE3491', name: 'Electrical Machines – II', credits: 4, type: 'theory' },
      { code: 'EE3402', name: 'Measurements and Instrumentation', credits: 3, type: 'theory' },
      { code: 'EE3451', name: 'Power Electronics', credits: 4, type: 'theory' },
      { code: 'GE3451', name: 'Environmental Sciences and Sustainability', credits: 2, type: 'mandatory' },
      { code: 'EE3411', name: 'Control and Instrumentation Lab', credits: 1.5, type: 'lab' },
      { code: 'EE3461', name: 'Power Electronics Lab', credits: 1.5, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'EE3501', name: 'Power Systems – I', credits: 4, type: 'theory' },
      { code: 'EE3551', name: 'Power Systems – II', credits: 4, type: 'theory' },
      { code: 'EE3502', name: 'Microprocessors and Microcontrollers', credits: 4, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: eeePEOptions },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: eeePEOptions },
      { code: 'MC-I', name: 'Mandatory Course I', credits: 0, type: 'mandatory', options: MandatoryCourseIPool },
      { code: 'EE3511', name: 'Microprocessors and Microcontrollers Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'EE3601', name: 'Solid State Drives', credits: 4, type: 'theory' },
      { code: 'EE3691', name: 'Digital Signal Processing', credits: 4, type: 'theory' },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: eeePEOptions },
      { code: 'PE-IV', name: 'Professional Elective IV', credits: 3, type: 'elective_pe', options: eeePEOptions },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
      { code: 'MC-II', name: 'Mandatory Course II', credits: 0, type: 'mandatory', options: MandatoryCourseIIPool },
      { code: 'EE3611', name: 'Solid State Drives Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'GE3791', name: 'Human Values and Ethics', credits: 2, type: 'theory' },
      { code: 'Elective-Mgmt', name: 'Management Elective', credits: 3, type: 'theory', options: ManagementElectivePool },
      { code: 'OE-II', name: 'Open Elective II', credits: 3, type: 'elective_oe', options: OEPoolII },
      { code: 'OE-III', name: 'Open Elective III', credits: 3, type: 'elective_oe', options: OEPoolIII },
      { code: 'OE-IV', name: 'Open Elective IV', credits: 3, type: 'elective_oe', options: OEPoolIV },
      { code: 'EE3711', name: 'Summer Internship', credits: 2, type: 'internship' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'EE3811', name: 'Project Work / Internship', credits: 10, type: 'project' },
    ]
  }
];
