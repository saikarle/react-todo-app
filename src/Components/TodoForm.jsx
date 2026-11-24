
import { useState } from "react";
import { useTodo } from "../Context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

const add = (e) => {
  e.preventDefault();
  console.log("1. Form submit hua! Input text hai:", todo);

  // .trim() se sirf spaces waala empty todo nahi banega
  if (!todo) return;

  addTodo({
    todo,
    completed: false,
  });

  setTodo("");
};

return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(   e.target.value)}
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />

      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
