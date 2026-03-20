/*
 * GPAfy — Regulation Data Index
 * Central registry of all Anna University regulation data
 * Supports R2017 and R2021 with 13+ departments
 */

import { R2017_SEM1_COMMON, R2017_SEM2_COMMON } from './regulations/common'
import { CSE, ECE, IT, AIDS, CSBS, CSD, CSE_CS, AIML } from './regulations/r2021_depts'
import { EEE, MECH, CIVIL, BME, MECT } from './regulations/r2021_depts2'
import { CSE as R2025_CSE, ECE as R2025_ECE, IT as R2025_IT } from './regulations/r2025_depts'
import {
  CSE_PROFESSIONAL_ELECTIVES,
  ECE_PROFESSIONAL_ELECTIVES,
  EEE_PROFESSIONAL_ELECTIVES,
  MECH_PROFESSIONAL_ELECTIVES,
  OPEN_ELECTIVES,
  HONORS_INFO,
} from './regulations/electives'

/* ─── R2017 (Legacy) ─── */
const R2017_CSE = {
  name: 'Computer Science & Engineering',
  semesters: {
    1: R2017_SEM1_COMMON,
    2: R2017_SEM2_COMMON,
    3: [
      { code: 'MA8351', name: 'Discrete Mathematics', credits: 4, type: 'theory' },
      { code: 'CS8351', name: 'Digital Principles & System Design', credits: 4, type: 'theory' },
      { code: 'CS8391', name: 'Data Structures', credits: 3, type: 'theory' },
      { code: 'CS8392', name: 'Object Oriented Programming', credits: 3, type: 'theory' },
      { code: 'EC8395', name: 'Communication Engineering', credits: 3, type: 'theory' },
      { code: 'CS8381', name: 'Data Structures Lab', credits: 2, type: 'lab' },
      { code: 'CS8383', name: 'Object Oriented Programming Lab', credits: 2, type: 'lab' },
    ],
    4: [
      { code: 'MA8402', name: 'Probability & Queuing Theory', credits: 4, type: 'theory' },
      { code: 'CS8491', name: 'Computer Architecture', credits: 4, type: 'theory' },
      { code: 'CS8492', name: 'Database Management Systems', credits: 3, type: 'theory' },
      { code: 'CS8451', name: 'Design & Analysis of Algorithms', credits: 3, type: 'theory' },
      { code: 'CS8493', name: 'Operating Systems', credits: 3, type: 'theory' },
      { code: 'CS8494', name: 'Software Engineering', credits: 3, type: 'theory' },
      { code: 'CS8481', name: 'Database Management Systems Lab', credits: 2, type: 'lab' },
      { code: 'CS8461', name: 'Operating Systems Lab', credits: 2, type: 'lab' },
    ],
  },
}

const R2017_ECE = {
  name: 'Electronics & Communication Engineering',
  semesters: {
    1: R2017_SEM1_COMMON,
    2: R2017_SEM2_COMMON,
    3: [
      { code: 'MA8352', name: 'Linear Algebra & PDE', credits: 4, type: 'theory' },
      { code: 'EC8351', name: 'Electronic Circuits I', credits: 3, type: 'theory' },
      { code: 'EC8352', name: 'Signals & Systems', credits: 3, type: 'theory' },
      { code: 'EC8391', name: 'Control Systems Engineering', credits: 3, type: 'theory' },
      { code: 'EC8392', name: 'Digital Electronics', credits: 4, type: 'theory' },
      { code: 'EC8361', name: 'Analog & Digital Circuits Lab', credits: 2, type: 'lab' },
    ],
  },
}

const R2017_IT = {
  name: 'Information Technology',
  semesters: {
    1: R2017_SEM1_COMMON,
    2: R2017_SEM2_COMMON,
    3: [
      { code: 'MA8351', name: 'Discrete Mathematics', credits: 4, type: 'theory' },
      { code: 'CS8351', name: 'Digital Principles & System Design', credits: 4, type: 'theory' },
      { code: 'CS8391', name: 'Data Structures', credits: 3, type: 'theory' },
      { code: 'CS8392', name: 'Object Oriented Programming', credits: 3, type: 'theory' },
      { code: 'EC8394', name: 'Analog & Digital Communication', credits: 3, type: 'theory' },
      { code: 'CS8381', name: 'Data Structures Lab', credits: 2, type: 'lab' },
      { code: 'CS8382', name: 'Digital Systems Lab', credits: 2, type: 'lab' },
    ],
  },
}

const R2017_EEE = {
  name: 'Electrical & Electronics Engineering',
  semesters: {
    1: R2017_SEM1_COMMON,
    2: R2017_SEM2_COMMON,
    3: [
      { code: 'MA8353', name: 'Transforms & PDE', credits: 4, type: 'theory' },
      { code: 'EE8351', name: 'Digital Logic Circuits', credits: 3, type: 'theory' },
      { code: 'EE8391', name: 'Electromagnetic Theory', credits: 3, type: 'theory' },
      { code: 'EE8301', name: 'Electrical Machines I', credits: 3, type: 'theory' },
      { code: 'EC8353', name: 'Electron Devices & Circuits', credits: 3, type: 'theory' },
      { code: 'ME8792', name: 'Power Plant Engineering', credits: 3, type: 'theory' },
      { code: 'EE8311', name: 'Electrical Machines Lab I', credits: 2, type: 'lab' },
    ],
  },
}

const R2017_MECH = {
  name: 'Mechanical Engineering',
  semesters: {
    1: R2017_SEM1_COMMON,
    2: R2017_SEM2_COMMON,
    3: [
      { code: 'MA8353', name: 'Transforms & PDE', credits: 4, type: 'theory' },
      { code: 'ME8391', name: 'Engineering Thermodynamics', credits: 4, type: 'theory' },
      { code: 'CE8394', name: 'Fluid Mechanics & Machinery', credits: 4, type: 'theory' },
      { code: 'ME8351', name: 'Manufacturing Technology I', credits: 3, type: 'theory' },
      { code: 'EE8353', name: 'Electrical Drives & Controls', credits: 3, type: 'theory' },
      { code: 'ME8361', name: 'Manufacturing Tech Lab I', credits: 2, type: 'lab' },
    ],
  },
}

/* ─── Master Registry ─── */
export const regulationData = {
  R2025: {
    CSE: R2025_CSE,
    ECE: R2025_ECE,
    IT: R2025_IT,
  },
  R2021: {
    CSE, ECE, IT, AIDS, CSBS, CSD,
    'CSE-CS': CSE_CS,
    'CSE-AIML': AIML,
    EEE, MECH, CIVIL, BME, MECT,
  },
  R2017: {
    CSE: R2017_CSE,
    ECE: R2017_ECE,
    IT: R2017_IT,
    EEE: R2017_EEE,
    MECH: R2017_MECH,
  },
}

/* Labels for dropdowns */
export const regulationLabels = {
  R2025: 'R2025 (New Regulation)',
  R2021: 'R2021 (Current)',
  R2017: 'R2017 (Legacy)',
}

export const departmentLabels = {
  CSE: 'CSE — Computer Science & Engineering',
  ECE: 'ECE — Electronics & Communication',
  IT: 'IT — Information Technology',
  AIDS: 'AI&DS — Artificial Intelligence & Data Science',
  CSBS: 'CSBS — Computer Science & Business Systems',
  CSD: 'CSD — Computer Science & Design',
  'CSE-CS': 'CSE (CS) — Cyber Security',
  'CSE-AIML': 'CSE (AIML) — AI & Machine Learning',
  EEE: 'EEE — Electrical & Electronics',
  MECH: 'MECH — Mechanical Engineering',
  CIVIL: 'CIVIL — Civil Engineering',
  BME: 'BME — Biomedical Engineering',
  MECT: 'MECT — Mechatronics Engineering',
}

/* Export electives and honors for the Electives tab */
export {
  CSE_PROFESSIONAL_ELECTIVES,
  ECE_PROFESSIONAL_ELECTIVES,
  EEE_PROFESSIONAL_ELECTIVES,
  MECH_PROFESSIONAL_ELECTIVES,
  OPEN_ELECTIVES,
  HONORS_INFO,
}
