import Header from "./components/header";
import ToDoAdd from "./components/toDoAdd";
import ToDoList from "./components/toDoList";
import { useState, useEffect } from "react";
import "./App.css";

const LSKEY = "MyTodoApp";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const localTodos = window.localStorage.getItem(LSKEY + ".todos");
    const newCount = window.localStorage.getItem(LSKEY + ".count");
    if (localTodos != null) setTodos(JSON.parse(localTodos));
    setCount(newCount);
  }, []);
  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
    window.localStorage.setItem(LSKEY + ".count", count);
  }, [todos, count]);
  return (
    <>
      <Header />
      <ToDoAdd setTodos={setTodos} count={count} setCount={setCount} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
