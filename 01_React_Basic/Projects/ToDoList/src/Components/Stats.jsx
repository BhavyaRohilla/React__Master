import "./stats.css";

export default function Stats({ tasks }) {
  if (!tasks.length)
    return (
      <div className="footer-container">
        <p className="footer-text">
          <em>Start adding some tasks</em>
        </p>
      </div>
    );

  const numTasks = tasks.length;
  const numComplete = tasks.filter((task) => task.completed).length;

  return (
    <div className="footer-container">
      <p className="footer-text">
        {numComplete} of {numTasks} tasks completed!
      </p>
    </div>
  );
}
