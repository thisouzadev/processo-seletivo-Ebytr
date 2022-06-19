import React, { useState } from "react";
import TaskService from "../../services/task.services";

export default function TaskCreate() {
  const [status, setStatus] = useState("pendente");
  const [task, setTask] = useState("");
 
  console.log(status, task);
  const createTask = () => {
    new TaskService()
      .create(status, task);
    console.log(status, task);
  };
  const handleButton = (event) => {
    event.preventDefault();
    createTask();
  };
  return (
    <div>
      <form action="" method="post">
        <label htmlFor="task">
          <input
            type="text"
            onChange={ (event) => setTask(event.target.value) }
          />
        </label>
        <div className="radio-btn-container">
          <div
            className="radio-btn"
            onClick={() => {
              setStatus("pendente");
            }}
          >
            <input
              type="radio"
              value={status}
              name="status"
              checked={status == "pendente"}
            />
          pendente
          </div>
          <div
            className="radio-btn"
            onClick={() => {
              setStatus("em andamento");
            }}
          >
            <input
              type="radio"
              value={status}
              name="status"
              checked={status == "em andamento"}
            />
          em andamento
          </div>
          <div
            className="radio-btn"
            onClick={() => {
              setStatus("pronto");
            }}
          >
            <input
              type="radio"
              value={status}
              name="status"
              checked={status == "pronto"}
            />
          pronto
          </div>
        </div>
        <button
          type="submit"
          onClick={handleButton}
        >criar</button>
      </form>
    </div>
  );
}
