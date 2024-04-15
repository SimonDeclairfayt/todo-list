export default function ToDoList({ todos, setTodos }) {
  const handleCheckboxChange = (id) => {
    const updateTodos = todos.map((toDo) => {
      return toDo.id === id ? { ...toDo, checked: !toDo.checked } : toDo;
    });
    return setTodos(updateTodos);
  };
  return (
    <>
      <div className="mx-5">
        <h2 className="text-6xl font-bold mb-3">Todos</h2>
        <ul>
          {todos.length > 0 ? (
            todos.map((toDo) => (
              <li key={toDo.id}>
                <input
                  className="checked:bg-blue-500"
                  type="checkbox"
                  name={toDo.name}
                  checked={toDo.checked}
                  onChange={() => handleCheckboxChange(toDo.id)}
                />{" "}
                {toDo.name}
              </li>
            ))
          ) : (
            <li>No toDos yet</li>
          )}
        </ul>
      </div>
    </>
  );
}
