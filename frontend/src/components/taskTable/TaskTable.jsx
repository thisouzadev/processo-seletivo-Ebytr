import React, {  useContext, useEffect, useState } from "react";
import TaskService from "../../services/task.services";
import contextValue from "../../context/context";

export default function TaskTable() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const {setShow, setStatus, setTask, setId} = useContext(contextValue);

  useEffect(() => {
    new TaskService()
      .allTask()
      .then(({ data }) => {
        setTasks(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setTasks, tasks]);

  const handleChange = (string) => { 
    setSearch(string);
  };
  
  const searchTask = () => tasks.filter((element) => (
    element.task.toLowerCase().includes(search.toLowerCase())
  )); 

  const deleteTask = (id) => {
    new TaskService().delete(id);
  }; 
  const updateTask = (task) => {
    setStatus(task.status);
    setTask(task.task);
    setId(task._id);
    setShow(true);
  }; 
  if(tasks.length > 0) {
    return (
      <div>
        <form>
          <label htmlFor="searchTask">
        filtro por tarefas:
            <input
              data-testid="name-search"
              onChange={ (event) => handleChange(event.target.value) }
              type="text"
              name="searchTask"
            />
          </label>
        </form> 
        <table>
          <thead>
            <tr>
              {Object.keys(tasks[0]).map((title, index) => (
                <th key={ index }>
                  {title}
                </th>
              ))}
            </tr>
          </thead> 
          <tbody>
            {
              searchTask()
                .map((task, index) => (
                  <tr key={ index }>
                    {
                      Object.values(task).map((info, index2) => (
                        <td key={ index2 }>
                          {info}
                        </td>
                      ))
                    }
                    <tr key={index}>
                      <td>
                        <button onClick={ () => { updateTask(task); } }>
                            update
                        </button>             
                        <button onClick={ () => { deleteTask(task._id); } }>delete</button>
                      </td>
                    </tr>
                  </tr>
                ))
            }
          </tbody>  
        </table> 
      </div>
    );
  }
  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
}
