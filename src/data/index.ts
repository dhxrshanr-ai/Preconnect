import { Regulation } from '../types';
import { r2013_cse } from './r2013_cse';
import { r2017_cse } from './r2017_cse';
import { r2017_ece } from './r2017_ece';
import { r2017_eee } from './r2017_eee';
import { r2017_mech } from './r2017_mech';
import { r2017_civil } from './r2017_civil';

import { r2021_cse } from './r2021_cse';
import { r2021_ece } from './r2021_ece';
import { r2021_eee } from './r2021_eee';
import { r2021_it } from './r2021_it';
import { r2021_mech } from './r2021_mech';
import { r2021_civil } from './r2021_civil';
import { r2021_aids } from './r2021_aids';
import { r2021_aiml } from './r2021_aiml';
import { r2021_cds } from './r2021_cds';
import { r2021_cy } from './r2021_cy';
import { MASTER_R2021_SUBJECTS, ALL_PROFESSIONAL_ELECTIVES } from './r2021_master';

export { MASTER_R2021_SUBJECTS, ALL_PROFESSIONAL_ELECTIVES };

import { ALL_OPEN_ELECTIVES, ALL_MANDATORY_COURSES } from './shared_r2021';
export { ALL_OPEN_ELECTIVES, ALL_MANDATORY_COURSES };

import { r2025_cse } from './r2025_cse';
import { MASTER_R2025_SUBJECTS } from './r2025_master';

export { MASTER_R2025_SUBJECTS };

export const regulationsData: Regulation[] = [
  {
    reg: 'R2013',
    departments: [
      { dept: 'CSE', semesters: r2013_cse }
    ]
  },
  {
    reg: 'R2017',
    departments: [
      { dept: 'CSE', semesters: r2017_cse },
      { dept: 'ECE', semesters: r2017_ece },
      { dept: 'EEE', semesters: r2017_eee },
      { dept: 'MECH', semesters: r2017_mech },
      { dept: 'CIVIL', semesters: r2017_civil }
    ]
  },
  {
    reg: 'R2021',
    departments: [
      { dept: 'CSE', semesters: r2021_cse },
      { dept: 'ECE', semesters: r2021_ece },
      { dept: 'EEE', semesters: r2021_eee },
      { dept: 'IT', semesters: r2021_it },
      { dept: 'MECH', semesters: r2021_mech },
      { dept: 'CIVIL', semesters: r2021_civil },
      { dept: 'AIDS', semesters: r2021_aids },
      { dept: 'AIML', semesters: r2021_aiml },
      { dept: 'CDS', semesters: r2021_cds },
      { dept: 'CY', semesters: r2021_cy }
    ]
  },
  {
    reg: 'R2025',
    departments: [
      { dept: 'CSE', semesters: r2025_cse }
    ]
  }
];

export function getSubjects(reg: string, dept: string, sem: number) {
  const r = regulationsData.find(x => x.reg === reg);
  if (!r) return [];
  const d = r.departments.find(x => x.dept === dept);
  if (!d) return [];
  const s = d.semesters.find(x => x.sem === sem);
  return s ? s.subjects : [];
}
