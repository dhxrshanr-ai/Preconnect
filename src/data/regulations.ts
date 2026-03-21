export type Regulation = 'R2013' | 'R2017' | 'R2021' | 'R2025';

export interface GradePattern {
  [grade: string]: number;
}

export const REGULATION_GRADES: Record<Regulation, GradePattern> = {
  R2025: {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'U': 0,
    'W': 0,
  },
  R2021: {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'U': 0,
    'W': 0,
  },
  R2017: {
    'O': 10,
    'A+': 9,
    'A': 8,
    'B+': 7,
    'B': 6,
    'C': 5,
    'U': 0,
    'W': 0,
  },
  R2013: {
    'S': 10,
    'A': 9,
    'B': 8,
    'C': 7,
    'D': 6,
    'E': 5,
    'U': 0,
    'W': 0,
  },
};

export const REGULATION_OPTIONS: { value: Regulation; label: string }[] = [
  { value: 'R2025', label: 'Regulation 2025' },
  { value: 'R2021', label: 'Regulation 2021' },
  { value: 'R2017', label: 'Regulation 2017' },
  { value: 'R2013', label: 'Regulation 2013' },
];
