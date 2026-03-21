import { Semester, Subject } from '../types';
import { ManagementElectivePool, MandatoryCourseIPool, MandatoryCourseIIPool, OEPoolI, OEPoolII, OEPoolIII, OEPoolIV } from './shared_r2021';

const ecePEOptions: Subject[] = [
  { code: 'CEC363', name: 'Wide Bandgap Devices', credits: 3, type: 'elective_pe' },
  { code: 'CEC361', name: 'Validation and Testing Technology', credits: 3, type: 'elective_pe' },
  { code: 'CEC370', name: 'Low Power IC Design', credits: 3, type: 'elective_pe' },
  { code: 'CEC362', name: 'VLSI Testing and Design For Testability', credits: 3, type: 'elective_pe' },
  { code: 'CEC342', name: 'Mixed Signal IC Design Testing', credits: 3, type: 'elective_pe' },
  { code: 'CEC334', name: 'Analog IC Design', credits: 3, type: 'elective_pe' },
  { code: 'CEC332', name: 'Advanced Digital Signal Processing', credits: 3, type: 'elective_pe' },
  { code: 'CEC366', name: 'Image Processing', credits: 3, type: 'elective_pe' },
  { code: 'CEC356', name: 'Speech Processing', credits: 3, type: 'elective_pe' },
  { code: 'CEC355', name: 'Software Defined Radio', credits: 3, type: 'elective_pe' },
  { code: 'CEC337', name: 'DSP Architecture and Programming', credits: 3, type: 'elective_pe' },
  { code: 'CCS338', name: 'Computer Vision', credits: 3, type: 'elective_pe' },
  { code: 'CEC350', name: 'RF Transceivers', credits: 3, type: 'elective_pe' },
  { code: 'CEC353', name: 'Signal Integrity', credits: 3, type: 'elective_pe' },
  { code: 'CEC335', name: 'Antenna Design', credits: 3, type: 'elective_pe' },
  { code: 'CEC341', name: 'MICs and RF System Design', credits: 3, type: 'elective_pe' },
  { code: 'CEC338', name: 'EMI/EMC Pre Compliance Testing', credits: 3, type: 'elective_pe' },
  { code: 'CEC349', name: 'RFID System Design and Testing', credits: 3, type: 'elective_pe' },
  { code: 'CBM370', name: 'Wearable Devices', credits: 3, type: 'elective_pe' },
  { code: 'CBM352', name: 'Human Assist Devices', credits: 3, type: 'elective_pe' },
  { code: 'CBM368', name: 'Therapeutic Equipment', credits: 3, type: 'elective_pe' },
  { code: 'CBM355', name: 'Medical Imaging Systems', credits: 3, type: 'elective_pe' },
  { code: 'CBM342', name: 'Brain Computer Interface and Applications', credits: 3, type: 'elective_pe' },
  { code: 'CBM341', name: 'Body Area Networks', credits: 3, type: 'elective_pe' },
  { code: 'CEC359', name: 'Underwater Instrumentation System', credits: 3, type: 'elective_pe' },
  { code: 'CEC358', name: 'Underwater Imaging Systems & Image Proc.', credits: 3, type: 'elective_pe' },
  { code: 'CEC357', name: 'Underwater Communication', credits: 3, type: 'elective_pe' },
  { code: 'CEC344', name: 'Ocean Observation Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEC360', name: 'Underwater Navigation Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEC343', name: 'Ocean Acoustics', credits: 3, type: 'elective_pe' },
  { code: 'CEC369', name: 'IoT Processors', credits: 3, type: 'elective_pe' },
  { code: 'CEC368', name: 'IoT Based Systems Design', credits: 3, type: 'elective_pe' },
  { code: 'CEC365', name: 'Wireless Sensor Network Design', credits: 3, type: 'elective_pe' },
  { code: 'CEC367', name: 'Industrial IoT and Industry 4.0', credits: 3, type: 'elective_pe' },
  { code: 'CEC340', name: 'MEMS Design', credits: 3, type: 'elective_pe' },
  { code: 'CEC339', name: 'Fundamentals of Nanoelectronics', credits: 3, type: 'elective_pe' },
  { code: 'CEC347', name: 'Radar Technologies', credits: 3, type: 'elective_pe' },
  { code: 'CEC336', name: 'Avionics Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEC346', name: 'Positioning and Navigation Systems', credits: 3, type: 'elective_pe' },
  { code: 'CEC352', name: 'Satellite Communication', credits: 3, type: 'elective_pe' },
  { code: 'CEC348', name: 'Remote Sensing', credits: 3, type: 'elective_pe' },
  { code: 'CEC351', name: 'Rocketry and Space Mechanics', credits: 3, type: 'elective_pe' },
  { code: 'CEC345', name: 'Optical Communication and Networks', credits: 3, type: 'elective_pe' },
  { code: 'CEC364', name: 'Wireless Broad Band Networks', credits: 3, type: 'elective_pe' },
  { code: 'CEC331', name: '4G/5G Communication Networks', credits: 3, type: 'elective_pe' },
  { code: 'CEC354', name: 'Software Defined Networks', credits: 3, type: 'elective_pe' },
  { code: 'CEC371', name: 'Massive MIMO Networks', credits: 3, type: 'elective_pe' },
  { code: 'CEC333', name: 'Advanced Wireless Communication Techniques', credits: 3, type: 'elective_pe' },
];

export const r2021_ece: Semester[] = [
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
      { code: 'CS3353', name: 'C Programming and Data Structures', credits: 3, type: 'theory' },
      { code: 'EC3354', name: 'Signals and Systems', credits: 4, type: 'theory' },
      { code: 'EC3353', name: 'Electronic Devices and Circuits', credits: 3, type: 'theory' },
      { code: 'EC3351', name: 'Control Systems', credits: 3, type: 'theory' },
      { code: 'EC3352', name: 'Digital Systems Design', credits: 4, type: 'theory' },
      { code: 'EC3361', name: 'Electronic Devices and Circuits Lab', credits: 1.5, type: 'lab' },
      { code: 'CS3362', name: 'C Programming and Data Structures Lab', credits: 1.5, type: 'lab' },
      { code: 'GE3361', name: 'Professional Development', credits: 1, type: 'lab' },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'EC3452', name: 'Electromagnetic Fields', credits: 3, type: 'theory' },
      { code: 'EC3401', name: 'Networks and Security', credits: 4, type: 'theory' },
      { code: 'EC3451', name: 'Linear Integrated Circuits', credits: 3, type: 'theory' },
      { code: 'EC3492', name: 'Digital Signal Processing', credits: 4, type: 'theory' },
      { code: 'EC3491', name: 'Communication Systems', credits: 3, type: 'theory' },
      { code: 'GE3451', name: 'Environmental Sciences and Sustainability', credits: 2, type: 'mandatory' },
      { code: 'EC3461', name: 'Communication Systems Laboratory', credits: 1.5, type: 'lab' },
      { code: 'EC3462', name: 'Linear Integrated Circuits Laboratory', credits: 1.5, type: 'lab' },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'EC3501', name: 'Wireless Communication', credits: 4, type: 'theory' },
      { code: 'EC3552', name: 'VLSI and Chip Design', credits: 3, type: 'theory' },
      { code: 'EC3551', name: 'Transmission Lines and RF Systems', credits: 3, type: 'theory' },
      { code: 'PE-I', name: 'Professional Elective I', credits: 3, type: 'elective_pe', options: ecePEOptions },
      { code: 'PE-II', name: 'Professional Elective II', credits: 3, type: 'elective_pe', options: ecePEOptions },
      { code: 'PE-III', name: 'Professional Elective III', credits: 3, type: 'elective_pe', options: ecePEOptions },
      { code: 'MC-I', name: 'Mandatory Course I', credits: 0, type: 'mandatory', options: MandatoryCourseIPool },
      { code: 'EC3561', name: 'VLSI Laboratory', credits: 2, type: 'lab' },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'ET3491', name: 'Embedded Systems and IoT Design', credits: 4, type: 'theory' },
      { code: 'CS3491', name: 'Artificial Intelligence and Machine Learning', credits: 4, type: 'theory' },
      { code: 'OE-I', name: 'Open Elective I', credits: 3, type: 'elective_oe', options: OEPoolI },
      { code: 'PE-V', name: 'Professional Elective V', credits: 3, type: 'elective_pe', options: ecePEOptions },
      { code: 'PE-VI', name: 'Professional Elective VI', credits: 3, type: 'elective_pe', options: ecePEOptions },
      { code: 'PE-VII', name: 'Professional Elective VII', credits: 3, type: 'elective_pe', options: ecePEOptions },
      { code: 'MC-II', name: 'Mandatory Course II', credits: 0, type: 'mandatory', options: MandatoryCourseIIPool },
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
      { code: 'EC3711', name: 'Summer Internship', credits: 2, type: 'internship' },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'EC3811', name: 'Project Work / Internship', credits: 10, type: 'project' },
    ]
  }
];
