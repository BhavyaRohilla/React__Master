import { useState } from "react";
import "./form.css";

export default function Form({ onAddTasks }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low"); // Default value set to "Low"

  function handleSubmit(e) {
    e.preventDefault();

    if (taskName.trim() === "") {
      alert("Task name is required!");
      return;
    }

    const newTask = {
      taskName,
      description,
      dueDate,
      priority,
      id: Date.now(),
      completed: true,
    };
    console.log(newTask);

    onAddTasks(newTask);

    // Reset form fields after submission
    setTaskName("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  }

  return (
    <form className="task-form-horizontal" onSubmit={handleSubmit}>
      <div className="form-group-horizontal">
        <label className="form-label-horizontal">Task Name:</label>
        <input
          type="text"
          className="form-input-horizontal"
          placeholder="Enter task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div className="form-group-horizontal">
        <label className="form-label-horizontal">Description:</label>
        <input
          type="text"
          className="form-input-horizontal"
          placeholder="Enter task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group-horizontal">
        <label className="form-label-horizontal">Due Date:</label>
        <input
          type="date"
          className="form-input-horizontal"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-group-horizontal">
        <label className="form-label-horizontal">Priority:</label>
        <select
          className="form-select-horizontal"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit" className="form-button-horizontal">
        Add Task
      </button>
    </form>
  );
}
