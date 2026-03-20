import { R2025_SEM1_COMMON } from './common'

export const CSE = {
  name: 'Computer Science & Engineering',
  semesters: {
    1: R2025_SEM1_COMMON,
    2: [
      { code: 'MA25C02', name: 'Linear Algebra', credits: 4, type: 'theory' },
      { code: 'EN25C02', name: 'English Essentials – II', credits: 2, type: 'theory' },
      { code: 'PH25C03', name: 'Applied Physics (CSIE) – II', credits: 3, type: 'theory' },
      { code: 'EE25C01', name: 'Basic Electrical & Electronics Eng.', credits: 3, type: 'theory' },
      { code: 'CS25C06', name: 'Digital Principles & Computer Org.', credits: 4, type: 'theory' },
      { code: 'CS25C07', name: 'Object-Oriented Programming', credits: 4, type: 'theory' },
      { code: 'ME25C05', name: 'Re-Engineering for Innovation', credits: 2, type: 'lab' },
      { code: 'UC25H02', name: 'Tamils and Technology', credits: 1, type: 'theory' },
      { code: 'UC25A03', name: 'Life Skills for Engineers – II', credits: 1, type: 'theory' },
    ]
  }
}

export const ECE = {
  name: 'Electronics & Communication Engineering',
  semesters: {
    1: R2025_SEM1_COMMON,
    2: [
      { code: 'MA25C02', name: 'Linear Algebra', credits: 4, type: 'theory' },
      { code: 'EN25C02', name: 'English Essentials – II', credits: 2, type: 'theory' },
      { code: 'PH25C02', name: 'Applied Physics – II', credits: 3, type: 'theory' },
      { code: 'EE25C02', name: 'Circuit Theory', credits: 4, type: 'theory' },
      { code: 'CS25C04', name: 'Programming in Python', credits: 3, type: 'theory' },
      { code: 'ME25C05', name: 'Re-Engineering for Innovation', credits: 2, type: 'lab' },
      { code: 'UC25H02', name: 'Tamils and Technology', credits: 1, type: 'theory' },
    ]
  }
}

export const IT = {
  name: 'Information Technology',
  semesters: {
    1: R2025_SEM1_COMMON,
    2: [
      { code: 'MA25C02', name: 'Linear Algebra', credits: 4, type: 'theory' },
      { code: 'EN25C02', name: 'English Essentials – II', credits: 2, type: 'theory' },
      { code: 'PH25C03', name: 'Applied Physics (CSIE) – II', credits: 3, type: 'theory' },
      { code: 'EE25C01', name: 'Basic Electrical & Electronics Eng.', credits: 3, type: 'theory' },
      { code: 'CS25C06', name: 'Digital Principles & Computer Org.', credits: 4, type: 'theory' },
      { code: 'IT25C01', name: 'Web Essentials', credits: 3, type: 'theory' },
      { code: 'ME25C05', name: 'Re-Engineering for Innovation', credits: 2, type: 'lab' },
      { code: 'UC25H02', name: 'Tamils and Technology', credits: 1, type: 'theory' },
    ]
  }
}
