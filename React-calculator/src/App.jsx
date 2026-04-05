import React, { useState } from 'react'

const App = () => {
  const [current, setCurrent] = useState('')
  const [previous, setPrevious] = useState(null)
  const [operator, setOperator] = useState(null)

  const displayValue = current !== '' ? current : previous !== null ? String(previous) : ''

  const clearAll = () => {
    setCurrent('')
    setPrevious(null)
    setOperator(null)
  }

  const appendDigit = (digit) => {
    setCurrent((prev) => prev + digit)
  }

  const appendDecimal = () => {
    setCurrent((prev) => {
      if (prev.includes('.')) return prev
      return prev === '' ? '0.' : prev + '.'
    })
  }

  const compute = (a, op, b) => {
    if (op === '+') return a + b
    if (op === '-') return a - b
    if (op === 'x') return a * b
    return a
  }

  const chooseOperator = (nextOp) => {
    if (current === '' && previous !== null) {
      setOperator(nextOp)
      return
    }

    if (current !== '' && previous === null) {
      setPrevious(parseFloat(current))
      setCurrent('')
      setOperator(nextOp)
      return
    }

    if (current !== '' && previous !== null && operator) {
      const result = compute(previous, operator, parseFloat(current))
      setPrevious(result)
      setCurrent('')
      setOperator(nextOp)
    }
  }

  const applyPercent = () => {
    if (current !== '') {
      setCurrent(String(parseFloat(current) / 100))
      return
    }
    if (previous !== null) {
      setPrevious(previous / 100)
    }
  }

  const evaluate = () => {
    if (current === '' || previous === null || !operator) return
    const result = compute(previous, operator, parseFloat(current))
    setPrevious(result)
    setCurrent('')
    setOperator(null)
  }

  const handleButtonClick = (label) => {
    if (label === 'C') return clearAll()
    if (label === '=') return evaluate()
    if (label === '%') return applyPercent()
    if (label === '.') return appendDecimal()
    if (label === '+' || label === '-' || label === 'x') return chooseOperator(label)
    return appendDigit(label)
  }

  const buttons = [
    'C',
    '7',
    '6',
    '5',
    '+',
    '4',
    '3',
    '2',
    '-',
    '1',
    '0',
    '%',
    'x',
    '.',
    '=',
  ]

  return (
   <>
        <main className="calculator">
        <header className="calc-header">
            <h1>Calculator</h1>
            <p>Simple, clean, and fast.</p>
        </header>
        <input
          id="display"
          type="tel"
          placeholder="Enter number"
          autoComplete="off"
          value={displayValue}
          readOnly
        />
        <div className="btn">
          {buttons.map((label) => (
            <button key={label} onClick={() => handleButtonClick(label)}>
              {label}
            </button>
          ))}
        </div>
        <footer className="calc-footer">Built for quick keyboard-free math.</footer>
    </main>

   
   </>
  )
}

export default App
