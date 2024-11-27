import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import Stats from "./Components/Stats";

function App() {
  const [tasks, setNewTasks] = useState([]);

  function handleAddTasks(task) {
    setNewTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTasks(id) {
    setNewTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <Header />
      <Form onAddTasks={handleAddTasks} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTasks} />
      <Stats tasks={tasks} />
    </>
  );
}

export default App;
