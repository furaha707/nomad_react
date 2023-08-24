import React, { useState } from "react";
import './index.css'; 
import ExpenseForm  from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";

const App = () => {

  const [expenses, setExpenses] = useState([
  {id: 1, charge: '교통비', amount: 1600},
  {id: 2, charge: '식비', amount: 400},
  {id: 3, charge: '렌트비', amount: 1200}
]);

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');

  const [alert, setAlert] = useState({show: false, type: '', text: ''});
  
  const handleEdit = (id) => {
    
    let editExpense = expenses.find(item => item.id === id);
    setCharge(editExpense.charge);
    setAmount(editExpense.amount);
    setEdit(true);
    setId(id);

  }

  const handleCharge = (event) => {
    setCharge(event.target.value)
  }

  const handleAmount = (event) => {
    setAmount(event.target.valueAsNumber);
  }

  const handleAlert = ({type, text}) => {
    setAlert({show: true, type:type, text:text});
    setTimeout(() => {
      setAlert({show: false, type: '', text: ''});
    }, 5000)
  }

  const clearItems = () => {
    setExpenses([])
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(charge !== "" && amount > 0){

      if(edit){

        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item
        })


        setExpenses(newExpenses);
        setEdit(false);
        handleAlert({type: "success", text: "아이템이 수정되었습니다"});

      } else {
      // 객체 하나 만들어서 expenses 배열에 추가해줘야 함
      // state update 할 때는 불변성을 지켜줘야 함. 즉 이전 값 건드리지 않고 새로운 값을 만들어서 교체

      const newExpense = {id: Math.random(), charge, amount}
      const newExpenses = [...expenses, newExpense]
      setExpenses(newExpenses)
      handleAlert({type: "success", text: "아이템이 생성되었습니다"});
      }

      setCharge("");
      setAmount(0);

    }else{
      console.log('먼저 입력 해주세요');
      handleAlert({type: "danger", text: "charge는 빈 값일 수 없으며 amount는 0보다 커야 합니다."});
    }
  }

  // setState 를 써보자
  const handleDelete = (id) => {
    const newArray = expenses.filter(expense => expense.id !== id)
    setExpenses(newArray)
    handleAlert({type: "danger", text: "아이템이 제거되었습니다"});
  }

    return(
      <main className='main-container'>

        {alert.show ? <Alert type={alert.type} text={alert.text} /> : null}

        <h1>예산 계산기</h1>
        <div style={{ width: '100%', backgroundColor:'white', padding: '1rem' }}>
          <ExpenseForm  charge={charge} handleCharge={handleCharge} amount={amount} handleAmount={handleAmount} handleSubmit={handleSubmit} edit={edit} />
        </div>
        <div style={{ width: '100%', backgroundColor:'white', padding: '1rem' }}>
          <ExpenseList expenses={expenses} handleDelete={handleDelete} handleEdit={handleEdit} clearItems={clearItems} />
        </div>
        <div style={{ display:'flex', justifyContent:'end', marginTop: '1rem' }}>
          총지출: <span>
            {expenses.reduce((acc,cur) => (acc += cur.amount), 0)}
            원</span>
        </div>
      </main>
    )
}


export default App;


// 노마드강의 - propTypes 개념