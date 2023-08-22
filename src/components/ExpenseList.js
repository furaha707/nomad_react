import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css';

const ExpenseList = ({expenses, handleDelete}) => {

  console.log(expenses);

  return (
    <>
      <ul className="list">
        {expenses.map(expenses => (<ExpenseItem expense={expenses} key={expenses.id} handleDelete={handleDelete} />))}
      </ul>
      <button className="btn">
        목록 지우기
      </button>
    </>
  )
}

export default ExpenseList;




