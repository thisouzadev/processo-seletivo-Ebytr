import axios from "axios";

class TaskService {
  async create(status, task) {
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/task",
      data: {
        status,
        task,
      },
    });
    return response;
  }

  async getUserById(token, id) {
    const response = await axios({
      method: "get",
      url: `http://localhost:3001/user/${id}`,
      data: {},
      headers: { authorization: token },
    });
    //  console.log('NO FRONT USER SERVICE VEM SALEBYID?', response);
    return response;
  }

  async register(name, email, password) {
    const response = await axios({
      method: "post",
      url: "http://localhost:3001/register",
      data: {
        name,
        email,
        password,

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
}

export default TaskService;