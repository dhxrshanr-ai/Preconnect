import { Semester } from '../types';

export const r2025_cse: Semester[] = [
  {
    sem: 1,
    subjects: [
      { code: 'MA25C01', name: 'Applied Calculus', credits: 4, type: 'theory' },
      { code: 'PH25C01', name: 'Applied Physics - I', credits: 3, type: 'theory' },
      { code: 'CY25C01', name: 'Applied Chemistry - I', credits: 3, type: 'theory' },
      { code: 'EN25C01', name: 'English Essentials - I', credits: 2, type: 'theory' },
      { code: 'CS25C02', name: 'Computer Programming: Python', credits: 3, type: 'theory' },
      { code: 'ME25C01', name: 'Engineering Drawing', credits: 4, type: 'theory' },
      { code: 'UC25H01', name: 'Heritage of Tamils', credits: 1, type: 'mandatory' },
    ]
  },
  {
    sem: 2,
    subjects: [
      { code: 'MA23XX_2', name: 'Statistics and Numerical Methods (Prov.)', credits: 4, type: 'theory', isProvisional: true },
      { code: 'PH23XX_2', name: 'Physics for Information Science (Prov.)', credits: 3, type: 'theory', isProvisional: true },
      { code: 'BE23XX', name: 'Basic Electrical Engg (Prov.)', credits: 4, type: 'theory', isProvisional: true },
      { code: 'CS23XX_2', name: 'Data Structures (Prov.)', credits: 3, type: 'theory', isProvisional: true },
      { code: 'GE23TT', name: 'Tamils and Technology (Prov.)', credits: 1, type: 'mandatory', isProvisional: true },
      { code: 'CS23XX_L2', name: 'Data Structures Lab (Prov.)', credits: 2, type: 'lab', isProvisional: true },
      { code: 'GE23XX_L2', name: 'Communication Skills Lab (Prov.)', credits: 2, type: 'lab', isProvisional: true },
    ]
  },
  {
    sem: 3,
    subjects: [
      { code: 'PROV301', name: 'Provisional Subject 3.1', credits: 4, type: 'theory', isProvisional: true },
      { code: 'PROV302', name: 'Provisional Subject 3.2', credits: 4, type: 'theory', isProvisional: true },
      { code: 'PROV303', name: 'Provisional Subject 3.3', credits: 3, type: 'theory', isProvisional: true },
      { code: 'PROV304', name: 'Provisional Subject 3.4', credits: 3, type: 'theory', isProvisional: true },
      { code: 'PROV311', name: 'Provisional Lab 3.1', credits: 2, type: 'lab', isProvisional: true },
      { code: 'PROV312', name: 'Provisional Lab 3.2', credits: 2, type: 'lab', isProvisional: true },
    ]
  },
  {
    sem: 4,
    subjects: [
      { code: 'PROV401', name: 'Provisional Subject 4.1', credits: 4, type: 'theory', isProvisional: true },
      { code: 'PROV402', name: 'Provisional Subject 4.2', credits: 4, type: 'theory', isProvisional: true },
      { code: 'PROV403', name: 'Provisional Subject 4.3', credits: 3, type: 'theory', isProvisional: true },
      { code: 'PROV404', name: 'Provisional Subject 4.4', credits: 3, type: 'theory', isProvisional: true },
      { code: 'PROV411', name: 'Provisional Lab 4.1', credits: 2, type: 'lab', isProvisional: true },
      { code: 'PROV412', name: 'Provisional Lab 4.2', credits: 2, type: 'lab', isProvisional: true },
    ]
  },
  {
    sem: 5,
    subjects: [
      { code: 'PROV501', name: 'Provisional Subject 5.1', credits: 3, type: 'theory', isProvisional: true },
      { code: 'PROV502', name: 'Provisional Subject 5.2', credits: 3, type: 'theory', isProvisional: true },
      { code: 'PE-I', name: 'Professional Elective I (Prov.)', credits: 3, type: 'elective_pe', isProvisional: true },
      { code: 'PE-II', name: 'Professional Elective II (Prov.)', credits: 3, type: 'elective_pe', isProvisional: true },
      { code: 'OE-I', name: 'Open Elective I (Prov.)', credits: 3, type: 'elective_oe', isProvisional: true },
      { code: 'PROV511', name: 'Provisional Lab 5.1', credits: 2, type: 'lab', isProvisional: true },
    ]
  },
  {
    sem: 6,
    subjects: [
      { code: 'PROV601', name: 'Provisional Subject 6.1', credits: 3, type: 'theory', isProvisional: true },
      { code: 'PE-III', name: 'Professional Elective III (Prov.)', credits: 3, type: 'elective_pe', isProvisional: true },
      { code: 'PE-IV', name: 'Professional Elective IV (Prov.)', credits: 3, type: 'elective_pe', isProvisional: true },
      { code: 'OE-II', name: 'Open Elective II (Prov.)', credits: 3, type: 'elective_oe', isProvisional: true },
      { code: 'PROV611', name: 'Project Phase I (Prov.)', credits: 2, type: 'project', isProvisional: true },
    ]
  },
  {
    sem: 7,
    subjects: [
      { code: 'PE-V', name: 'Professional Elective V (Prov.)', credits: 3, type: 'elective_pe', isProvisional: true },
      { code: 'PE-VI', name: 'Professional Elective VI (Prov.)', credits: 3, type: 'elective_pe', isProvisional: true },
      { code: 'OE-III', name: 'Open Elective III (Prov.)', credits: 3, type: 'elective_oe', isProvisional: true },
      { code: 'OE-IV', name: 'Open Elective IV (Prov.)', credits: 3, type: 'elective_oe', isProvisional: true },
      { code: 'PROV711', name: 'Internship (Prov.)', credits: 2, type: 'internship', isProvisional: true },
    ]
  },
  {
    sem: 8,
    subjects: [
      { code: 'PROV811', name: 'Project Work Phase II (Prov.)', credits: 10, type: 'project', isProvisional: true },
    ]
  }
];
