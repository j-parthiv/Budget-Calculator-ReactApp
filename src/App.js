import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { v4 as uuidv4 } from "uuid";

const initialExpenses = [
  { id: uuidv4(), charge: "rent", amount: 1600 },
  { id: uuidv4(), charge: "car payment", amount: 400 },
  { id: uuidv4(), charge: "credit card bill", amount: 1200 },
];

function App() {
  //********* state values *************
  //all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState('')
  //single amount
  const [amount, setAmount] = useState('')
  //Alert
  const [alert, setAlert] = useState({show: false})
  //********* functionality *************
 const handleCharge = e =>{
  setCharge(e.target.value);
 }
 const handleAmount = e =>{
  setAmount(e.target.value);
 }

 const handleAlert = ({type, text}) =>{
  setAlert({show: true, type, text});
  setTimeout(()=>{
    setAlert({show: false})
  }, 3000)
 }

 const handleSubmit = e =>{
  e.preventDefault();
  if(charge !== " " && amount > 0){
    const singleExpense = {id: uuidv4(), charge, amount};
    setExpenses([...expenses, singleExpense]);
    handleAlert({type: "success", text: "item added"})
    console.log(expenses);
  }else{
    handleAlert({type: "danger", text: "some error"})
  }
  setCharge('')
  setAmount('')
 }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount} handleSubmit={handleSubmit} handleCharge={handleCharge}/>
        <ExpenseList expenses={expenses}/>
      </main>
      <h1>
        total spending : {" "}
        <span className="total">
        ${" "}
        {expenses.reduce((acc, cur)=>{
          return acc += parseInt(cur.amount);
        },0)}
        </span>
      </h1>
    </>
  );
}

export default App;
