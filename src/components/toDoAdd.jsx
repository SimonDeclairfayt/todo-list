import { useState } from "react";
export default function ToDoAdd({ setTodos, count, setCount }) {
  const [inputValue, setInputValue] = useState("");
  const clickHandler = () => {
    setTodos((prev) => [
      ...prev,
      { id: count, name: inputValue, checked: false },
    ]);
    setInputValue("");
    setCount(count + 1);
  };
  return (
    <>
      <div className="ml-8 flex flex-col items-start my-5">
        <input
          type="text"
          placeholder="Type a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 border bg-slate-100 rounded-md mb-3"
        />
        <button
          onClick={clickHandler}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Add Todo
        </button>
      </div>
    </>
  );
}
