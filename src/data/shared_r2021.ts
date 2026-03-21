import { Subject } from '../types';

export const OEPoolI: Subject[] = [
  { code: 'OAS351', name: 'Space Science', credits: 3, type: 'elective_oe' },
  { code: 'OIE351', name: 'Introduction to Industrial Engineering', credits: 3, type: 'elective_oe' },
  { code: 'OBT351', name: 'Food, Nutrition and Health', credits: 3, type: 'elective_oe' },
  { code: 'OCE351', name: 'Environmental and Social Impact Assessment', credits: 3, type: 'elective_oe' },
  { code: 'OEE351', name: 'Renewable Energy System', credits: 3, type: 'elective_oe' },
  { code: 'OEI351', name: 'Intro to Industrial Instrumentation & Ctrl', credits: 3, type: 'elective_oe' },
  { code: 'OMA351', name: 'Graph Theory', credits: 3, type: 'elective_oe' },
  { code: 'CCS355', name: 'Neural Networks and Deep Learning', credits: 3, type: 'elective_oe' },
  { code: 'CCW332', name: 'Digital Marketing', credits: 3, type: 'elective_oe' },
];

export const OEPoolII: Subject[] = [
  { code: 'OIE352', name: 'Resource Management Techniques', credits: 3, type: 'elective_oe' },
  { code: 'OMG351', name: 'Fintech Regulation', credits: 3, type: 'elective_oe' },
  { code: 'OFD351', name: 'Holistic Nutrition', credits: 3, type: 'elective_oe' },
  { code: 'AI3021', name: 'IT in Agricultural System', credits: 3, type: 'elective_oe' },
  { code: 'OEI352', name: 'Introduction to Control Engineering', credits: 3, type: 'elective_oe' },
  { code: 'OPY351', name: 'Pharmaceutical Nanotechnology', credits: 3, type: 'elective_oe' },
  { code: 'OAE351', name: 'Aviation Management', credits: 3, type: 'elective_oe' },
  { code: 'CCS342', name: 'DevOps', credits: 3, type: 'elective_oe' },
  { code: 'CCS361', name: 'Robotic Process Automation', credits: 3, type: 'elective_oe' },
];

export const OEPoolIII: Subject[] = [
  { code: 'OHS351', name: 'English for Competitive Examinations', credits: 3, type: 'elective_oe' },
  { code: 'CME365', name: 'Renewable Energy Technologies', credits: 3, type: 'elective_oe' },
  { code: 'OME354', name: 'Applied Design Thinking', credits: 3, type: 'elective_oe' },
  { code: 'AU3791', name: 'Electric and Hybrid Vehicles', credits: 3, type: 'elective_oe' },
  { code: 'OEE352', name: 'Electric Vehicle Technology', credits: 3, type: 'elective_oe' },
  { code: 'OMA352', name: 'Operations Research', credits: 3, type: 'elective_oe' },
  { code: 'OCH351', name: 'Nano Technology', credits: 3, type: 'elective_oe' },
];

export const OEPoolIV: Subject[] = [
  { code: 'OHS352', name: 'Project Report Writing', credits: 3, type: 'elective_oe' },
  { code: 'OMA355', name: 'Advanced Numerical Methods', credits: 3, type: 'elective_oe' },
  { code: 'OME352', name: 'Additive Manufacturing', credits: 3, type: 'elective_oe' },
  { code: 'CME343', name: 'New Product Development', credits: 3, type: 'elective_oe' },
  { code: 'AU3002', name: 'Batteries and Management System', credits: 3, type: 'elective_oe' },
];


export const MandatoryCourseIPool: Subject[] = [
  { code: 'MX3081', name: 'Introduction to Women and Gender Studies', credits: 0, type: 'mandatory' },
  { code: 'MX3082', name: 'Elements of Literature', credits: 0, type: 'mandatory' },
  { code: 'MX3083', name: 'Film Appreciation', credits: 0, type: 'mandatory' },
  { code: 'MX3084', name: 'Disaster Management', credits: 0, type: 'mandatory' },
];

export const MandatoryCourseIIPool: Subject[] = [
  { code: 'MX3085', name: 'Well Being with Traditional Practices', credits: 0, type: 'mandatory' },
  { code: 'MX3086', name: 'History of Science and Technology', credits: 0, type: 'mandatory' },
  { code: 'MX3087', name: 'Political and Economic Thought', credits: 0, type: 'mandatory' },
  { code: 'MX3088', name: 'State, Nation Building and Politics', credits: 0, type: 'mandatory' },
  { code: 'MX3089', name: 'Industrial Safety', credits: 0, type: 'mandatory' },
];

export const ManagementElectivePool: Subject[] = [
  { code: 'GE3751', name: 'Principles of Management', credits: 3, type: 'theory' },
  { code: 'GE3752', name: 'Total Quality Management', credits: 3, type: 'theory' },
  { code: 'GE3753', name: 'Engineering Economics and Financial Acc.', credits: 3, type: 'theory' },
  { code: 'GE3754', name: 'Human Resource Management', credits: 3, type: 'theory' },
  { code: 'GE3755', name: 'Knowledge Management', credits: 3, type: 'theory' },
  { code: 'GE3792', name: 'Industrial Management', credits: 3, type: 'theory' },
];

export const ALL_OPEN_ELECTIVES: Subject[] = [
  ...OEPoolI,
  ...OEPoolII,
  ...OEPoolIII,
  ...OEPoolIV
];

export const ALL_MANDATORY_COURSES: Subject[] = [
  ...MandatoryCourseIPool,
  ...MandatoryCourseIIPool
];
