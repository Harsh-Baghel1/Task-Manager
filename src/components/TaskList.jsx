import TaskItem from "./TaskItem";

function TaskList({ tasks, setTasks }) {

  return (
    <div>

      {tasks.length === 0 && <p>No tasks found</p>}

      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}

    </div>
  );
}

export default TaskList;