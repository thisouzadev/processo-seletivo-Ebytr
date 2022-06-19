import React from "react";
import "./App.css";
import TaskForm from "./components/taskform/TaskForm";
import TaskTable from "./components/taskTable/TaskTable";

function App() {
  return (
    <div className="App">
      <TaskForm />
      <TaskTable />
    </div>
  );
}

export default App;
