import React, { useState } from 'react';
import TodoItem from './TodoItem ';
import { FaEdit } from 'react-icons/fa'; // Importing the edit icon from react-icons library
import Card from '@mui/material/Card'; // Importing the Card component from Material-UI
import CardContent from '@mui/material/CardContent'; // Importing the CardContent component from Material-UI

function TodoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Doctor Appointment',
      status: 'completed',
      createdAt: new Date().toLocaleString(), // Added createdAt timestamp
      updatedAt: null // Added updatedAt timestamp
    },
    {
      id: 2,
      description: 'Meeting at School',
      status: 'pending',
      createdAt: new Date().toLocaleString(),
      updatedAt: null
    }
  ]);

  const [text, setText] = useState('');

  function addTask(description) {
    const newTask = {
      id: Date.now(),
      description,
      status: 'pending',
      createdAt: new Date().toLocaleString(), // Record creation timestamp
      updatedAt: null
    };
    setTasks([...tasks, newTask]);
    setText('');
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function toggleCompleted(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        const newStatus = task.status === 'completed' ? 'pending' : 'completed'; // Toggle status
        return { ...task, status: newStatus };
      } else {
        return task;
      }
    }));
  }

  function toggleEditable(id) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, editable: !task.editable };
      } else {
        return task;
      }
    }));
  }

  function handleTaskEdit(id, newDescription) {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, description: newDescription, updatedAt: new Date().toLocaleString() }; // Update description and record update timestamp
      } else {
        return task;
      }
    }));
  }

  function handleKeyPress(id, event) {
    if (event.key === 'Enter') {
      toggleEditable(id);
    }
  }

  return (
    <div className="todo-list" style={{ backgroundColor: 'darkblue', padding: '20px' }}> 
      <div className="add-task" style={{ marginTop: '100px', marginBottom: '30px', display: 'flex', alignItems: 'center' }}>
        <input
          placeholder="Add a new task..."
          value={text}
          onChange={e => setText(e.target.value)}
          style={{ width: '240px', marginBottom: '30px', marginRight: '10px' }} // Adjusted input width and margin
        />
        <button onClick={() => addTask(text)} style={{ width: '100px', marginBottom: '30px' }}>Add</button> {/* Adjusted button width */}
      </div>
      <div className="task-cards">
        {tasks.map(task => (
          <Card key={task.id} className={`task-card ${task.status === 'completed' ? 'completed' : ''}`} style={{ marginBottom: '50px' }}>
            <CardContent>
              {task.editable ? ( // Render input field if editable
                <input
                  type="text"
                  value={task.description}
                  onChange={e => handleTaskEdit(task.id, e.target.value)}
                  onBlur={() => toggleEditable(task.id)} // Toggle editable state when losing focus
                  onKeyPress={e => handleKeyPress(task.id, e)} // Handle Enter key press
                  autoFocus // Auto-focus on input field when editable
                />
              ) : (
                <>
                  <TodoItem
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                  />
                  <FaEdit className="edit-icon" onClick={() => toggleEditable(task.id)} /> {/* Edit icon */}
                </>
              )}
              <p>Status: {task.status}</p>
              <p>Created: {task.createdAt}</p>
              {task.updatedAt && <p>Updated: {task.updatedAt}</p>}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
