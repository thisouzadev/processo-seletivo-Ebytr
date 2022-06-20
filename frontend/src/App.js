import React from "react";
import "./App.css";
import TaskCreate from "./components/taskCreate/TaskCreate";
import TaskTable from "./components/taskTable/TaskTable";
import TaskUpdate from "./components/taskUpdate/TaskUpdate";
import Provider from "./context/provider";

function App() {
  return (
    <div className="App">
      <Provider>
        <TaskCreate />
        <TaskTable />
        <TaskUpdate />
      </Provider>
    </div>
  );
}

export default App;
