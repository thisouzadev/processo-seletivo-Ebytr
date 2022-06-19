import axios from "axios";

class TaskService {
  async create(status, task) {
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/task",
      data:  {
        status,
        task,
      },
    });
    return response;
  }

  async allTask(){
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/task",
      data: {},
    });
    return response;
  }

  async delete(id){
    const response = await axios({
      method: "delete",
      url: `http://localhost:3000/task/${id}`,
      data: {},
    });
    return response;
  }
}

export default TaskService;