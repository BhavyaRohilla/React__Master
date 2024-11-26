import "./header.css";

export default function Header() {
  return (
    <div className="todo-header">
      <h1 className="todo-title">My To-Do List</h1>
      <h2 className="todo-subtitle">Stay Organized, Stay Productive</h2>
      <p className="todo-description">
        Plan your day, tick off your goals, and make progress one step at a
        time!
      </p>
    </div>
  );
}
