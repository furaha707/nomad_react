import React, { Component } from "react";
import './index.css'; 
import  ExpenseForm  from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";


// function Food({name, image, rating}) {
//   return (
//     <div className="foods">
//       <span>{name}</span>  
//       <h4>{rating}</h4>
//       <img src={image} alt={name}></img>  
//     </div>
//   );
// }

// const foodList = [{id:1, name:'kimchi', image:'#', rating: 1}, {id:2, name:'soup', image:'#', rating: 2}]

// // 타입체크
// Food.propTypes = {
//   name: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired
// }

// function renderFood(dish){
//   console.log(dish)
//   return <Food name={dish.name} image={dish.image} key={dish.id} rating={dish.rating}/>
// }

// function App() {
//   return (
//     <div className="App">
//       {foodList.map(renderFood)}
//     </div>
//   );
// }

export default class App extends Component {
  render(){
    return(
      <main className='main-container'>
        <h1>예산 계산기</h1>
        <div style={{ width: '100%', backgroundColor:'white', padding: '1rem' }}>
          <ExpenseForm />
        </div>
        <div style={{ width: '100%', backgroundColor:'white', padding: '1rem' }}>
          <ExpenseList />
        </div>
        <div style={{ display:'flex', justifyContent:'end', marginTop: '1rem' }}>
          총지출: <span>원</span>
        </div>
      </main>
    )
  }
}
