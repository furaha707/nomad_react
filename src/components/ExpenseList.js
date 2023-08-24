import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css';

const ExpenseList = ({expenses, handleDelete, handleEdit, clearItems}) => {

  console.log(expenses);

  return (
    <>
      <ul className="list">
        {expenses.map(expenses => (<ExpenseItem expense={expenses} key={expenses.id} handleDelete={handleDelete} handleEdit={handleEdit} />))}
      </ul>
      {expenses.length > 0 &&
      <button className="btn" onClick={clearItems}>
        목록 지우기
      </button>
      }
    </>
  )
}

export default ExpenseList;




