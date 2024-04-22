import React from 'react';


function TodoItem({ task, deleteTask, toggleCompleted, toggleEditable}) {
  return (
    <div className={`todo-item ${task.status === 'completed' ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.status === 'completed'}
        onChange={() => toggleCompleted(task.id)}
      />
      {task.editable ? (
        <input
          type="text"
          value={task.description}
          onChange={e => console.log('Handle description change')}
          autoFocus
        />
      ) : (
        <span className="description">{task.description}</span>
      )}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
      {/* {!task.editable && <FaEdit className="edit-icon" onClick={() => toggleEditable(task.id)} />} */}
    </div>
  );
}

export default TodoItem;
