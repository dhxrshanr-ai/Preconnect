import { useState, useEffect, useCallback } from 'react'
import SubjectRow from '../components/SubjectRow'
import GPAResult from '../components/GPAResult'
import { calculateGPA } from '../utils/calculateGPA'
import { getGradePoint } from '../utils/gradePoints'
import { saveData, loadData } from '../utils/storage'

const newSubject = () => ({
  id: Date.now() + Math.random(),
  code: '',
  name: '',
  credits: '',
  grade: '',
  creditsOverridden: false,
})

const DEFAULT_SUBJECTS = () => Array.from({ length: 6 }, () => newSubject())

export default function Calculator() {
  const [subjects, setSubjects] = useState(() => loadData('gpa_subjects') || DEFAULT_SUBJECTS())
  const [gpa, setGPA] = useState(0)
  const [targetGPA, setTargetGPA] = useState('')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    saveData('gpa_subjects', subjects)
    setGPA(calculateGPA(subjects))
    setSaved(false)
  }, [subjects])

  const updateSubject = useCallback((idx, field, value) => {
    setSubjects(prev => prev.map((s, i) => i === idx ? { ...s, [field]: value } : s))
  }, [])

  const addSubject = () => setSubjects(prev => [...prev, newSubject()])

  const removeSubject = (idx) => {
    if (subjects.length <= 1) return
    setSubjects(prev => prev.filter((_, i) => i !== idx))
  }

  const resetAll = () => {
    setSubjects(DEFAULT_SUBJECTS())
    setTargetGPA('')
  }

  const totalCr = subjects.reduce((a, s) => a + (Number(s.credits) || 0), 0)
  const filledCount = subjects.filter(s => s.grade && s.credits).length
  const arrears = subjects.filter(s => s.grade === 'U').length
  const isAllFail = filledCount > 0 && arrears === filledCount
  const currentGPAValue = isAllFail ? 0 : gpa

  // Target GPA Logic
  const remainingSubjects = subjects.filter(s => !s.grade && s.credits)
  const remainingCredits = remainingSubjects.reduce((a, s) => a + (Number(s.credits) || 0), 0)
  const currentPoints = subjects.filter(s => s.grade && s.credits).reduce((a, s) => a + (getGradePoint(s.grade) * Number(s.credits)), 0)
  
  let targetMessage = ''
  if (targetGPA && remainingCredits > 0) {
    const target = parseFloat(targetGPA)
    const requiredPoints = (target * totalCr) - currentPoints
    const avgGradeNeeded = (requiredPoints / remainingCredits).toFixed(2)
    
    if (avgGradeNeeded > 10) targetMessage = "Impossible! 😱 Target too high."
    else if (avgGradeNeeded <= 0) targetMessage = "Goal Reached! 🎉"
    else targetMessage = `Avg Grade needed: ${avgGradeNeeded}`
  }

  const handleSave = () => {
    const history = loadData('gpa_history') || []
    history.push({
      id: Date.now(),
      date: new Date().toISOString(),
      gpa: currentGPAValue,
      credits: totalCr,
      subjects: filledCount,
      label: 'GPA Session'
    })
    saveData('gpa_history', history)
    setSaved(true)
  }

  return (
    <div className="gpafy-page">
      <header className="section-header">
        <h2 className="section-title">GPA Calculator</h2>
        <p className="section-desc">Fast, accurate, and mobile-ready calculation.</p>
      </header>

      {/* Target GPA Section */}
      <section className="subject-card target-card">
        <div className="card-header">
          <span className="card-index">🎯 Target Goal</span>
        </div>
        <div className="card-row">
          <div className="input-group flex-1">
            <label className="input-label">I want to get...</label>
            <input 
              type="number" 
              inputMode="decimal"
              className="input" 
              placeholder="e.g. 8.5"
              value={targetGPA}
              onChange={e => setTargetGPA(e.target.value)}
              step="0.01" min="0" max="10"
            />
          </div>
          <div className="target-result flex-2">
            <span className="target-msg">{targetMessage || "Enter goal to see required grades"}</span>
          </div>
        </div>
      </section>

      <section className="subject-container">
        {subjects.map((sub, i) => (
          <SubjectRow
            key={sub.id}
            subject={sub}
            index={i}
            subjects={subjects}
            onChange={updateSubject}
            onRemove={removeSubject}
          />
        ))}
      </section>

      {/* Add Subject FAB */}
      <button className="fab-add" onClick={addSubject} aria-label="Add Subject">
        <span className="fab-icon">+</span>
      </button>

      <div className="calc-actions">
        <button className="btn-outline-modern" onClick={resetAll}>Reset Fields</button>
        <div className="calc-stats-inline">
          <span>{filledCount} Subjects Filled</span>
        </div>
      </div>

      {/* Sticky Bottom Result Bar */}
      <footer className="sticky-results">
        <div className="sticky-results-inner">
          <div className="result-main">
            <span className="result-value">{currentGPAValue.toFixed(2)}</span>
            <span className="result-tag">Current GPA</span>
          </div>
          
          <button 
            className={`btn-save-modern ${saved ? 'saved' : ''}`}
            onClick={handleSave}
            disabled={filledCount === 0 || saved}
          >
            {saved ? '✓ Saved' : 'Save GPA'}
          </button>
        </div>
      </footer>
    </div>
  )
}
