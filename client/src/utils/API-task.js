import axios from "axios";

export default {
  createTask: function(body) {
    return axios.post("https://jumbletron.herokuapp.com//api/task", body);
  },
  getTasks: function(id) {
    return axios.get("https://jumbletron.herokuapp.com//api/task/" + id);
  },
  updateTask: function(id, body) {
    return axios.put("https://jumbletron.herokuapp.com//api/task/" + id, body);
  },
  removeTask: function(id) {
    return axios.delete("https://jumbletron.herokuapp.com//api/task/" + id);
  }
};