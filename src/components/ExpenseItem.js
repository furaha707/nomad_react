import React, { Component } from 'react'
import './ExpenseItem.css';
import { AiFillAlert, AiFillBulb } from "react-icons/ai";

export default class ExpenseItem extends Component {
  render() {
    return (
      <li className="item">
        <div className="info">
          <span className="expense">식비</span>
          <span className="amount">1000원</span>
        </div>
        <div>
          <button className="edit-btn"><AiFillBulb /></button>
          <button className="clear-btn"><AiFillAlert /></button>
        </div>
      </li>
    )
  }
}
