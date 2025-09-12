import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [error, setError] = useState(''); // Hata mesajı için state

  const addTask = () => {
    if (!task.trim()) {
      setError('Task cannot be empty!'); // Boş görev için uyarı mesajı
      return;
    }
    setTasks([...tasks, task]);
    setTask('');
    setError(''); // Hata mesajını temizle
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Hata mesajını göster */}
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;