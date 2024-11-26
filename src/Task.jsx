import React from 'react';

const Task = ({ task, tasks, setTasks }) => {
  // Function to mark the task as completed
  const markAsComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Function to delete the task
  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <span>{task.text}</span>
      <div>
        {/* Mark as complete button */}
        <button onClick={() => markAsComplete(task.id)}>
          {task.completed ? 'Undo' : 'Mark as Complete'}
        </button>
        {/* Delete task button */}
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;

