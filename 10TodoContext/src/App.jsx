import { useEffect, useState } from "react";
import { TodoProvider } from "./Contexts/index";
import { TodoForm, TodoItem } from "./Components/index";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((previousTodo) => [{ id: Date.now(), ...todo }, ...previousTodo]);
  };
  const deleteTodo = (id) => {
    setTodos((previousTodo) =>
      previousTodo.filter((prevTodo) => prevTodo.id !== id)
    );
  };
  const updatedTodo = (id, todo) => {
    setTodos((previousTodo) =>
      previousTodo.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };
  const toggleComplete = (id) => {
    setTodos((previousTodo) =>
      previousTodo.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoProvider
        value={{ todos, addTodo, updatedTodo, deleteTodo, toggleComplete }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((todo) => (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}
