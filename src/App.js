import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {id:uuidv4(), charge:"rent", amount:1600},
  {id:uuidv4(), charge:"car payment", amount:400},
  {id:uuidv4(), charge:"credit card bill", amount:1200}
]
console.log(initialExpenses)

function App() {
  return (
  <div>
    <Alert/>
    <ExpenseForm/>
    <ExpenseList/>
  </div>
  );
}

export default App;
