import { Subject } from '../types';

/**
 * Master registry of all subjects under Anna University Regulation 2025.
 * This is used for search and auto-population of custom subjects.
 */
export const MASTER_R2025_SUBJECTS: Record<string, Omit<Subject, 'type'>> = {
  // MATHEMATICS & BASIC SCIENCE
  'MA25C01': { code: 'MA25C01', name: 'Applied Calculus', credits: 4 },
  'MA25C01T': { code: 'MA25C01T', name: 'Applied Calculus (Tamil Medium)', credits: 4 },
  'PH25C01': { code: 'PH25C01', name: 'Applied Physics - I', credits: 3 },
  'PH25C01T': { code: 'PH25C01T', name: 'Applied Physics - I (Tamil Medium)', credits: 3 },
  'CY25C01': { code: 'CY25C01', name: 'Applied Chemistry - I', credits: 3 },
  'CY25C01T': { code: 'CY25C01T', name: 'Applied Chemistry - I (Tamil Medium)', credits: 3 },
  'MA25102': { code: 'MA25102', name: 'Ordinary Differential Equations and Transform Techniques', credits: 4 },
  'AR25102': { code: 'AR25102', name: 'Mathematics for Architects', credits: 4 },

  // HUMANITIES & ENGLISH
  'EN25C01': { code: 'EN25C01', name: 'English Essentials - I', credits: 2 },
  'UC25H01': { code: 'UC25H01', name: 'Heritage of Tamils', credits: 1 },
  'AR25C01': { code: 'AR25C01', name: 'Introduction to Language and English Skills', credits: 2 },

  // COMPUTER PROGRAMMING (branch-specific)
  'CS25C01': { code: 'CS25C01', name: 'Computer Programming: C', credits: 3 },
  'CS25C02': { code: 'CS25C02', name: 'Computer Programming: Python', credits: 3 },
  'CS25C02T': { code: 'CS25C02T', name: 'Computer Programming: Python (Tamil Medium)', credits: 3 },
  'CS25C03': { code: 'CS25C03', name: 'Essentials of Computing', credits: 3 },

  // ENGINEERING SCIENCE – GENERAL
  'ME25C01': { code: 'ME25C01', name: 'Engineering Drawing', credits: 4 },
  'ME25C01T': { code: 'ME25C01T', name: 'Engineering Drawing (Tamil Medium)', credits: 4 },
  'ME25C02': { code: 'ME25C02', name: 'Engineering Mechanics', credits: 4 },
  'EE25C03': { code: 'EE25C03', name: 'Fundamentals of Electrical and Electronics Engineering', credits: 3 },
  'EE25C04': { code: 'EE25C04', name: 'Basic Electronics and Electrical Engineering', credits: 3 },

  // DEPARTMENT INTRODUCTORY COURSES (DIC)
  'ME25C03': { code: 'ME25C03', name: 'Introduction to Mechanical Engineering', credits: 3 },
  'ME25C03T': { code: 'ME25C03T', name: 'Introduction to Mechanical Engineering (Tamil Medium)', credits: 3 },
  'CE25C01': { code: 'CE25C01', name: 'Introduction to Civil Engineering', credits: 3 },
  'CE25C01T': { code: 'CE25C01T', name: 'Introduction to Civil Engineering (Tamil Medium)', credits: 3 },
  'EI25C01': { code: 'EI25C01', name: 'Introduction to Measurement and Instrumentation', credits: 3 },
  'CH25C01': { code: 'CH25C01', name: 'Introduction to Chemical Engineering', credits: 3 },
  'TT25C01': { code: 'TT25C01', name: 'Introduction to Textile Technology', credits: 3 },
  'TC25101': { code: 'TC25101', name: 'Introduction to Textile Chemistry', credits: 3 },
  'FT25101': { code: 'FT25101', name: 'Introduction to Fashion Design', credits: 3 },
  'BT25101': { code: 'BT25101', name: 'Introduction to Biotechnology', credits: 3 },
  'FD25101': { code: 'FD25101', name: 'Introduction to Food Technology', credits: 3 },
  'PE25101': { code: 'PE25101', name: 'Introduction to Petroleum Engineering', credits: 3 },
  'PT25101': { code: 'PT25101', name: 'Introduction to Polymer Science and Engineering', credits: 3 },
  'PC25101': { code: 'PC25101', name: 'Introduction to Petrochemicals', credits: 3 },
  'PY25C01': { code: 'PY25C01', name: 'Introduction to Pharmaceutical Technology', credits: 3 },

  // EEE TRAINING INTEGRATED PROGRAMME
  'TI25101': { code: 'TI25101', name: 'Electrical and Circuit Analysis', credits: 3 },
  'TI25102': { code: 'TI25102', name: 'Electromagnetic Theory', credits: 3 },
  'TI25103': { code: 'TI25103', name: 'Digital Electronics', credits: 3 },
  'TI25104': { code: 'TI25104', name: 'Analog Electronics', credits: 3 },

  // B.ARCH
  'AR25101': { code: 'AR25101', name: 'Introduction to Architecture', credits: 4 },
  'AR25103': { code: 'AR25103', name: 'Geometrical Drawing (4 hrs.)', credits: 4 },

  // B.DES
  'BS25101': { code: 'BS25101', name: 'Design Appreciation through History I', credits: 4 },
  'BS25102': { code: 'BS25102', name: 'Principles of Design', credits: 4 },
  'BS25103': { code: 'BS25103', name: 'Visual Arts and Crafts - I', credits: 3 },
  'BS25104': { code: 'BS25104', name: 'Geometrical Drawing I', credits: 2 },
};
