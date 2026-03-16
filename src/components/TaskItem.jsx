function TaskItem({ task, tasks, setTasks }) {

  const deleteTask = () => {
    const updatedTasks = tasks.filter(t => t.id !== task.id);
    setTasks(updatedTasks);
  };

  const toggleComplete = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );

    setTasks(updatedTasks);
  };

  return (
    <div className="task">

      <h3 className={task.completed ? "done" : ""}>
        {task.text}
      </h3>

      <p>{task.category}</p>

      <button onClick={toggleComplete}>Complete</button>
      <button onClick={deleteTask}>Delete</button>

    </div>
  );
}

export default TaskItem;