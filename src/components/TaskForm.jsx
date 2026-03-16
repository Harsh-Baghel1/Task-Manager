import { useState } from "react";

function TaskForm({ tasks, setTasks }) {

  const [task, setTask] = useState("");
  const [category, setCategory] = useState("Work");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) return;

    const newTask = {
      id: Date.now(),
      text: task,
      category: category,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Work</option>
        <option>Personal</option>
      </select>

      <button>Add</button>

    </form>
  );
}

export default TaskForm;