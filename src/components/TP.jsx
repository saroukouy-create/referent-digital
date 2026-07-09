import { useState } from 'react'

export default function TP({ tp }) {
  const [checked, setChecked] = useState(() => tp.steps.map(() => false))

  const toggle = (i) => {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)))
  }

  const done = checked.filter(Boolean).length

  return (
    <div className="tp-block">
      <div className="tp-header">
        <h4>🛠️ {tp.title}</h4>
        <span className="tp-progress">
          {done}/{tp.steps.length} étapes
        </span>
      </div>
      <p className="tp-scenario">{tp.scenario}</p>
      <ul className="tp-steps">
        {tp.steps.map((step, i) => (
          <li key={i}>
            <label>
              <input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} />
              <span className={checked[i] ? 'done' : ''}>{step}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
