import React from "react";
import "./App.css";
import TaskCreate from "./components/taskCreate/TaskCreate";
import TaskTable from "./components/taskTable/TaskTable";

function App() {
  return (
    <div className="App">
      <TaskCreate />
      <TaskTable />
    </div>
  );
}

export default App;
