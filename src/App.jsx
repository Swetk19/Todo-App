import React, { useState } from 'react';
import Task from './Task';
import './App.css';

const App = () => {
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState('');

  // Handle adding a new task
  const addTask = () => {
    if (!newTask.trim()) {
      setError('Task description cannot be empty.');
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask('');
    setError(''); // Clear any previous error
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      
      {/* Input field to add a task */}
      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Show error message if task input is empty */}
      {error && <div className="error">{error}</div>}

      {/* List of tasks */}
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))}
      </div>
    </div>
  );
};

export default App;
