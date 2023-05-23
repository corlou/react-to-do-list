import AddTodo from ".//components/AddTodo";
import ToDoItem from "./components/ToDoItem";


import './index.css';

function App() {
  const getItem = (item) => {
    console.log(item)

  }
  return (
    <div className="todo">
      <AddTodo item={getItem} />
      <ToDoItem />

    </div>
  );
}

export default App;
