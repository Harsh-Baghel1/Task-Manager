import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  // Load tasks
 useEffect(() => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  setTasks(savedTasks);
}, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Search task..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <TaskForm tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />

    </div>
  );
}

export default App;