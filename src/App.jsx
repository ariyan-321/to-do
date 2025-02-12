import { useState } from 'react'
import './App.css'

export default function App() {
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = e.target.task.value;

    if (task) {
      const newTask = {
        task,
        id: Date.now(),
      };
      setTodo([...todo, newTask]);
      e.target.reset();
    }
  };

  return (
    <div className="App to-do-container">
      <form className="form" onSubmit={handleSubmit} action="">
        <input
          className="input"
          placeholder="Get Track Of Your ToDoS"
          name="task"
          type="text"
        />
        <button className="btn">Add</button>
      </form>
      <ul className="ul">
        {todo.map((i) => (
          <li key={i.id}>{i.task}</li>
        ))}
      </ul>
    </div>
  );
}
