import AddTodo from "./components/AddTodo";
import ToDoItem from "./components/ToDoItem";
import { useState } from 'react'
import './index.css';

function App() {
  const [todo, setToDo] = useState([])

  const getItem = (item) => {
    setToDo((prevState) => {
      return [...prevState, item]
    })
  }

  const getCompleted = (id) => {
    setToDo((prevState) => {
      return prevState.filter((item, index) => {
        return index !== id;
      }
      )
    })

  }

  return (
    <div className="todo">
      <AddTodo item={getItem} />
      {todo && todo.map((todo, index) => (
        <ToDoItem id={index} item={todo} completed={getCompleted} />
      ))}
    </div>
  );
}

export default App;
