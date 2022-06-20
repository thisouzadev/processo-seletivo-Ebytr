import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import context from "../../context/context";
import TaskService from "../../services/task.services";

function TaskUpdate() {
  const { show, setShow, status, setStatus, task, setTask, id} = useContext(context);
  console.log(task,  status, "update");

  const handleClose = () => setShow(false);

  const updateTask = () => {
    new TaskService()
      .update(id, status, task);
  };

  const handleButton = (event) => {
    event.preventDefault();
    updateTask();
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update todo</Modal.Title>
        </Modal.Header>
        <div>
          <form action="" method="post">
            <label htmlFor="task">
              <input
                type="text"
                value={task}
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
            >update</button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default TaskUpdate;
