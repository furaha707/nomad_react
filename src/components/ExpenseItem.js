import React from 'react'
import './ExpenseItem.css';
import { AiFillAlert, AiFillBulb } from "react-icons/ai";

const ExpenseItem = ({expense, handleDelete, handleEdit}) => {

    return (
      <li className="item">
        <div className="info">
          <span className="expense">{expense.charge}</span>
          <span className="amount">{expense.amount}</span>
        </div>
        <div>
          <button className="edit-btn" onClick={() => {handleEdit(expense.id)}}><AiFillBulb /></button>
          <button className="clear-btn" onClick={() => {handleDelete(expense.id)}}><AiFillAlert /></button>
        </div>
      </li>
    )
  }

export default ExpenseItem 