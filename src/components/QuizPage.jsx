import { useState } from 'react'
import { QUIZ_ANSWERS } from '../data.js'
import { injectSymbolTooltips } from './LessonPage.jsx'
import { useEffect, useRef } from 'react'

const LETTERS = ['A', 'B', 'C', 'D']

export default function QuizPage({ lesson, onNavigate, nav }) {
  const [answered, setAnswered] = useState({}) // { qid: letter }
  const wrapRef = useRef(null)

  useEffect(() => {
    if (wrapRef.current) injectSymbolTooltips(wrapRef.current)
  }, [])

  function handleOptionClick(qid, letter) {
    if (answered[qid]) return
    setAnswered(prev => ({ ...prev, [qid]: letter }))
  }

  const nextItem = nav.flatMap(g => g.items).find(i => i.id === lesson.next)
  const btnText = nextItem ? `Continue: ${nextItem.label} →` : 'Continue →'

  // Compute score
  const allAnswered = lesson.questions.every(q => answered[q.id])
  let score = 0
  if (allAnswered) {
    lesson.questions.forEach(q => {
      if (answered[q.id] === QUIZ_ANSWERS[q.id]) score++
    })
  }
  const total = lesson.questions.length
  const pct = total > 0 ? score / total : 0
  const scoreColor = pct >= 0.83 ? 'var(--green)' : pct >= 0.5 ? 'var(--yellow)' : 'var(--red)'

  return (
    <div className="page active">
      <div className="page-header">
        <div className="badge">{lesson.badge}</div>
        <h2>{lesson.title}</h2>
        <p>{lesson.intro}</p>
      </div>

      <div className="quiz-wrap" ref={wrapRef}>
        <div className="quiz-head-label">// QUIZ_0{lesson.quizId}</div>
        <div className="quiz-head-sub">
          {lesson.questions.length} questions · MCQ + Output Prediction · Click to answer
        </div>

        {lesson.questions.map(q => {
          const chosen = answered[q.id]
          const correct = QUIZ_ANSWERS[q.id]
          const isAnswered = !!chosen
          const isRight = chosen === correct

          return (
            <div className="q-block" key={q.id} id={q.id}>
              <div className="q-num">{q.num} · {q.type === 'output' ? 'Output Prediction' : 'Multiple Choice'}</div>
              <div className="q-text">{q.text}</div>
              {q.code && (
                <div className="q-code" dangerouslySetInnerHTML={{ __html: q.code }} />
              )}
              <div className="options">
                {q.opts.map((opt, i) => {
                  const letter = LETTERS[i]
                  const isCorrectOpt = letter === correct
                  const isWrongOpt = isAnswered && !isRight && letter === chosen
                  let cls = 'option'
                  if (isAnswered) {
                    cls += ' disabled'
                    if (isCorrectOpt) cls += ' correct'
                    else if (isWrongOpt) cls += ' wrong'
                  }
                  return (
                    <div
                      key={letter}
                      className={cls}
                      onClick={() => handleOptionClick(q.id, letter)}
                    >
                      <span className="opt-letter">{letter}</span>
                      {opt}
                    </div>
                  )
                })}
              </div>
              <div
                className={`feedback correct-fb${isAnswered && answered[q.id] === QUIZ_ANSWERS[q.id] ? ' show' : ''}`}
                dangerouslySetInnerHTML={{ __html: q.ok }}
              />
              <div
                className={`feedback wrong-fb${isAnswered && answered[q.id] !== QUIZ_ANSWERS[q.id] ? ' show' : ''}`}
                dangerouslySetInnerHTML={{ __html: q.no }}
              />
            </div>
          )
        })}

        {allAnswered && (
          <div className="quiz-score show">
            <div className="score-num" style={{ color: scoreColor }}>{score}/{total}</div>
            <div className="score-label">Quiz {lesson.quizId} complete</div>
          </div>
        )}
      </div>

      {lesson.next ? (
        <button className="next-btn" onClick={() => onNavigate(lesson.next)}>
          {btnText}
        </button>
      ) : (
        <div className="finish-card">
          <div className="fi">🎓</div>
          <h3>You've covered the full OOP syllabus.</h3>
          <p>Now build something end-to-end — a mini bank system, a shape calculator with operator overloading, or a matrix library. A real project turns knowledge into skill.</p>
        </div>
      )}
    </div>
  )
}
