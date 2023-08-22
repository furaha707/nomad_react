import React, { useState } from "react";
import './index.css'; 
import ExpenseForm  from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

const App = () => {

  const [expenses, setExpenses] = useState([
  {id: 1, charge: '교통비', amount: 1600},
  {id: 2, charge: '식비', amount: 400},
  {id: 3, charge: '렌트비', amount: 1200}
]);

  // setState 를 써보자
  const handleDelete = (id) => {
    const newArray = expenses.filter(expense => expense.id !== id)

    setExpenses(newArray)
  }

    return(
      <main className='main-container'>
        <h1>예산 계산기</h1>
        <div style={{ width: '100%', backgroundColor:'white', padding: '1rem' }}>
          <ExpenseForm />
        </div>
        <div style={{ width: '100%', backgroundColor:'white', padding: '1rem' }}>
          <ExpenseList expenses={expenses} handleDelete={handleDelete} />
        </div>
        <div style={{ display:'flex', justifyContent:'end', marginTop: '1rem' }}>
          총지출: <span>원</span>
        </div>
      </main>
    )
}


export default App;


// 노마드강의 - propTypes 개념