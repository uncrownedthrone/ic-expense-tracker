import React, { useState, useEffect } from 'react'
import ExpenseItem from './components/ExpenseItem'

const App = () => {
  const [expenses, setExpenses] = useState([])
  const getDataFromAPI = async () => {
    const resp = await fetch(
      'https://sdg-expense-api.herokuapp.com/api/expense'
    )
    const data = await resp.json()
    console.log(data)
    setExpenses(data)
  }

  useEffect(() => {
    console.log('using the effect')
    getDataFromAPI()
  }, [])

  return (
    <>
      Expense Tracker
      <ul>
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              note={expense.note}
              type={expense.type}
              when={expense.when}
              amount={expense.amount}
            />
          )
        })}
      </ul>
    </>
  )
}

export default App
