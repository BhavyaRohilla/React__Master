import "./list.css";
export default function List({ tasks, onDeleteTask }) {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={tasks.completed}
        onChange={() => {}}
        className="task-checkbox"
      />
      <span
        className="task-details"
        style={tasks.completed ? { textDecoration: "line-through" } : {}}
      >
        <strong className="task-name">{tasks.taskName}</strong>
        <p className="task-description">Description:{tasks.description}</p>
        <p className="task-due-date">
          <em>Due: {tasks.dueDate}</em>
        </p>
        <p className="task-priority">Priority: {tasks.priority}</p>
        <button onClick={() => onDeleteTask(tasks.id)}>❌</button>
      </span>
    </li>
  );
}
