import { useState } from 'react'

export default function Quiz({ quiz }) {
  const [selected, setSelected] = useState(() => quiz.questions.map(() => null))
  const [submitted, setSubmitted] = useState(false)

  const select = (qIndex, optIndex) => {
    if (submitted) return
    setSelected((prev) => prev.map((v, idx) => (idx === qIndex ? optIndex : v)))
  }

  const score = quiz.questions.reduce((acc, q, i) => acc + (selected[i] === q.answer ? 1 : 0), 0)
  const allAnswered = selected.every((v) => v !== null)

  const reset = () => {
    setSelected(quiz.questions.map(() => null))
    setSubmitted(false)
  }

  return (
    <div className="quiz-block">
      <div className="quiz-header">
        <h4>❓ {quiz.title}</h4>
        {submitted && (
          <span className="quiz-score">
            {score}/{quiz.questions.length}
          </span>
        )}
      </div>

      {quiz.questions.map((q, qi) => (
        <div className="quiz-question" key={qi}>
          <p>
            {qi + 1}. {q.q}
          </p>
          <div className="quiz-options">
            {q.options.map((opt, oi) => {
              const isSelected = selected[qi] === oi
              const isCorrect = submitted && oi === q.answer
              const isWrong = submitted && isSelected && oi !== q.answer
              return (
                <button
                  type="button"
                  key={oi}
                  className={
                    'quiz-option' +
                    (isSelected ? ' selected' : '') +
                    (isCorrect ? ' correct' : '') +
                    (isWrong ? ' wrong' : '')
                  }
                  onClick={() => select(qi, oi)}
                >
                  {opt}
                </button>
              )
            })}
          </div>
        </div>
      ))}

      <div className="quiz-actions">
        {!submitted ? (
          <button
            type="button"
            className="quiz-submit"
            disabled={!allAnswered}
            onClick={() => setSubmitted(true)}
          >
            Valider mes réponses
          </button>
        ) : (
          <button type="button" className="quiz-submit" onClick={reset}>
            Recommencer
          </button>
        )}
      </div>
    </div>
  )
}
