import React, { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import CallTracker from 'jest-jasmine2/build/jasmine/CallTracker'

const App = () => {
  const [expenses, setExpenses] = useState([])
  return (
    <>
      Expense Tracker
      <ul>
        <li>Expense 1</li>
        <li>Expense 1</li>
        <li>Expense 1</li>
        <li>Expense 1</li>
      </ul>
    </>
  )
}

export default App
