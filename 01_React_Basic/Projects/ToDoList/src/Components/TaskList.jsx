import List from "./List";
import "./tasklist.css";
export default function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasklist-container">
      <ul>
        {tasks.map((task) => (
          <List key={task.id} tasks={task} onDeleteTask={onDeleteTask} />
        ))}
      </ul>
    </div>
  );
}
