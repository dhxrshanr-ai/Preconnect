import { useState, useCallback } from 'react'
import { GRADES, getGradeFromMarks, getGradePoint } from '../utils/gradePoints'
import { calculateGPA } from '../utils/calculateGPA'
import RegulationSelector from '../components/RegulationSelector'
import { regulationData } from '../utils/regulationData'

const newSubject = (name = '', credits = '', code = '') => ({
  id: Date.now() + Math.random(),
  code,
  name,
  credits,
  marks: '',
  grade: '',
  gradePoint: 0,
})

const DEFAULT_SUBS = () => [
  newSubject('Subject 1', '3'),
  newSubject('Subject 2', '3'),
  newSubject('Subject 3', '4'),
  newSubject('Subject 4', '3'),
  newSubject('Subject 5', '4'),
]

export default function ResultAnalyzer() {
  const [subjects, setSubjects] = useState(DEFAULT_SUBS)
  const [gpa, setGpa] = useState(0)

  const recalc = (subs) => {
    const mapped = subs.map(s => ({ credits: s.credits, grade: s.grade }))
    setGpa(calculateGPA(mapped))
  }

  const updateMarks = useCallback((idx, marks) => {
    setSubjects(prev => {
      const updated = prev.map((s, i) => {
        if (i !== idx) return s
        const m = Number(marks)
        const grade = (marks !== '' && !isNaN(m)) ? getGradeFromMarks(m) || '' : ''
        const gradePoint = grade ? getGradePoint(grade) : 0
        return { ...s, marks, grade, gradePoint }
      })
      recalc(updated)
      return updated
    })
  }, [])

  const updateField = useCallback((idx, field, val) => {
    setSubjects(prev => {
      const updated = prev.map((s, i) => i === idx ? { ...s, [field]: val } : s)
      recalc(updated)
      return updated
    })
  }, [])

  const addSubject = () => setSubjects(prev => [...prev, newSubject()])

  const removeSubject = (idx) => {
    if (subjects.length <= 1) return
    setSubjects(prev => {
      const updated = prev.filter((_, i) => i !== idx)
      recalc(updated)
      return updated
    })
  }

  const handleTemplateLoad = (regulation, department, semester) => {
    const templateSubs = regulationData[regulation]?.[department]?.semesters?.[semester] || []
    if (templateSubs.length === 0) return
    const loaded = templateSubs.map(s => newSubject(s.name, String(s.credits), s.code))
    setSubjects(loaded)
    recalc(loaded)
  }

  const resetAll = () => {
    setSubjects(DEFAULT_SUBS())
    setGpa(0)
  }

  const filledCount = subjects.filter(s => s.grade).length
  const arrears = subjects.filter(s => s.grade === 'U').length
  const passCount = subjects.filter(s => s.grade && s.grade !== 'U').length
  const totalCredits = subjects.reduce((a, s) => a + (Number(s.credits) || 0), 0)

  return (
    <div className="gpafy-page">
      <header className="section-header">
        <h2 className="section-title">Result Analyzer</h2>
        <p className="section-desc">Auto-detect grades and GPA from marks.</p>
      </header>

      <RegulationSelector onLoad={handleTemplateLoad} />

      <section className="subject-container">
        {subjects.map((sub, i) => {
          const isFail = sub.grade === 'U'
          return (
            <div className={`subject-card ${isFail ? 'card-fail' : ''}`} key={sub.id}>
              <div className="card-header">
                <span className="card-index">Subject {i + 1}</span>
                <div className="card-header-right">
                  {sub.grade && <span className={`status-badge ${isFail ? 'badge-default' : 'badge-verified'}`}>{sub.grade}</span>}
                  <button className="btn-close" onClick={() => removeSubject(i)}>✕</button>
                </div>
              </div>
              <div className="card-body">
                <div className="card-row">
                  <div className="input-group flex-2">
                    <label className="input-label">Name / Code</label>
                    <input
                      type="text"
                      className="input"
                      placeholder="e.g. Mathematics"
                      value={sub.name || sub.code || ''}
                      onChange={e => updateField(i, 'name', e.target.value)}
                    />
                  </div>
                  <div className="input-group flex-1">
                    <label className="input-label">Marks</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      className="input"
                      placeholder="0-100"
                      value={sub.marks}
                      onChange={e => updateMarks(i, e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <div className="calc-actions">
        <button className="btn-outline-modern" onClick={addSubject}>+ Add Entry</button>
        <button className="btn-outline-modern" onClick={resetAll}>Reset All</button>
      </div>

      {filledCount > 0 && (
        <footer className="sticky-results">
          <div className="sticky-results-inner">
            <div className="result-main">
              <span className="result-value">{gpa.toFixed(2)}</span>
              <span className="result-tag">Predicted GPA</span>
            </div>
            <div className="result-stats-mini">
               <span className="s-lbl">{arrears} Arrears</span>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}
