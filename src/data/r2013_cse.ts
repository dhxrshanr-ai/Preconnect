import { Semester } from '../types';

export const r2013_cse: Semester[] = [
  {
    sem: 1,
    subjects: [
      { code: 'MA2111', name: 'Mathematics I', credits: 4, type: 'theory' },
      { code: 'PH2111', name: 'Engineering Physics I', credits: 3, type: 'theory' },
      { code: 'CY2111', name: 'Engineering Chemistry I', credits: 3, type: 'theory' },
      { code: 'GE2111', name: 'Engineering Graphics', credits: 4, type: 'theory' },
      { code: 'GE2112', name: 'Fundamentals of Computing and Programming', credits: 4, type: 'theory' },
      { code: 'PH2116/CY2116', name: 'Physics / Chemistry Lab', credits: 2, type: 'lab' },
      { code: 'GE2116', name: 'Engineering Practices Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 2,
    subjects: [
      { code: 'MA2211', name: 'Transforms and Partial Differential Eqns', credits: 4, type: 'theory' },
      { code: 'PH2161', name: 'Engineering Physics II', credits: 3, type: 'theory' },
      { code: 'CY2161', name: 'Engineering Chemistry II', credits: 3, type: 'theory' },
      { code: 'GE2151', name: 'Electric Circuits and Electron Devices', credits: 4, type: 'theory' },
      { code: 'GE2152', name: 'Engineering Graphics (CAD)', credits: 4, type: 'theory' },
      { code: 'PH2166/CY2166', name: 'Physics / Chemistry Lab', credits: 2, type: 'lab' },
      { code: 'GE2155', name: 'Computer Practice Lab I', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 3,
    subjects: [
      { code: 'MA2265', name: 'Discrete Mathematics', credits: 4, type: 'theory' },
      { code: 'CS2201', name: 'Data Structures', credits: 3, type: 'theory' },
      { code: 'CS2202', name: 'Digital Principles and System Design', credits: 3, type: 'theory' },
      { code: 'CS2203', name: 'Object Oriented Programming', credits: 3, type: 'theory' },
      { code: 'EC2201', name: 'Electrical Engineering', credits: 3, type: 'theory' },
      { code: 'CS2207', name: 'Digital and System Design Lab', credits: 2, type: 'lab' },
      { code: 'CS2209', name: 'Object Oriented Programming Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'MA2262', name: 'Probability and Queueing Theory', credits: 4, type: 'theory' },
      { code: 'CS2251', name: 'Design and Analysis of Algorithms', credits: 3, type: 'theory' },
      { code: 'CS2252', name: 'Microprocessors and Microcontrollers', credits: 3, type: 'theory' },
      { code: 'CS2253', name: 'Computer Organisation and Architecture', credits: 3, type: 'theory' },
      { code: 'CS2254', name: 'Operating Systems', credits: 3, type: 'theory' },
      { code: 'CS2257', name: 'Operating Systems Lab', credits: 2, type: 'lab' },
      { code: 'CS2259', name: 'Microprocessors Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'CS2301', name: 'Theory of Computation', credits: 3, type: 'theory' },
      { code: 'CS2302', name: 'Computer Networks', credits: 3, type: 'theory' },
      // Subject list implies Theory of Comp is dupe. Replaced with Software Engineering usually or left out.
      { code: 'CS2304', name: 'System Software', credits: 3, type: 'theory' },
      { code: 'CS2305', name: 'Programming Paradigms', credits: 3, type: 'theory' },
      
      // PE I
      { code: 'CS2401', name: 'Computer Graphics', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-I' },
      { code: 'CS2402', name: 'Mobile Computing', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-I' },
      { code: 'CS2403', name: 'Digital Signal Processing', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-I' },

      { code: 'CS2307', name: 'Networks Lab', credits: 2, type: 'lab' },
      { code: 'CS2309', name: 'System Software Lab', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'CS2351', name: 'Artificial Intelligence', credits: 3, type: 'theory' },
      { code: 'CS2352', name: 'Principles of Compiler Design', credits: 3, type: 'theory' },
      { code: 'CS2353', name: 'Object Oriented Analysis and Design', credits: 3, type: 'theory' },
      { code: 'CS2354', name: 'Advanced Computer Architecture', credits: 3, type: 'theory' },
      
      // PE II
      { code: 'CS2021', name: 'Distributed Systems', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-II' },
      { code: 'CS2022', name: 'Storage Area Networks', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-II' },
      { code: 'CS2023', name: 'Natural Language Processing', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-II' },

      // PE III
      { code: 'CS2024', name: 'Embedded Systems', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-III' },
      { code: 'CS2025', name: 'Pattern Recognition and Image Processing', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-III' },
      { code: 'CS2026', name: 'User Interface Design', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-III' },

      { code: 'CS2357', name: 'Object Oriented Analysis and Design Lab', credits: 2, type: 'lab' },
      { code: 'MG2351', name: 'Principles of Management', credits: 3, type: 'mandatory' },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'CS2401_CORE', name: 'Computer Graphics', credits: 3, type: 'theory' },
      
      // PE IV
      { code: 'CS2027', name: 'Service Oriented Architecture', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-IV' },
      { code: 'CS2028', name: 'Wireless Sensor Networks', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-IV' },
      
      // PE V
      { code: 'CS2029', name: 'Software Architecture', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-V' },
      { code: 'CS2030', name: 'Knowledge Engineering', credits: 3, type: 'elective_pe', electiveGroupId: 'PE-V' },

      // OE
      { code: 'OE2401', name: 'Open Elective (Any Dept)', credits: 3, type: 'elective_oe', electiveGroupId: 'OE-I' },

      { code: 'CS2403_LAB', name: 'Digital Signal Processing Lab', credits: 2, type: 'lab' },
      { code: 'IT2401', name: 'Project Phase I', credits: 2, type: 'project' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'IT2402', name: 'Project Phase II (Final Year Project)', credits: 8, type: 'project' },
      { code: 'GE2021', name: 'Total Quality Management (Audit)', credits: 0, type: 'mandatory' },
    ]
  }
];
