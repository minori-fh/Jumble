import axios from "axios";

export default {
  findProjects: function() {
    return axios.get("https://jumbletron.herokuapp.com//api/project");
  },
  createProject: function(body) {
    return axios.post("https://jumbletron.herokuapp.com//api/project", body);
  },
  getProject: function(id) {
    return axios.get("https://jumbletron.herokuapp.com//api/project/" + id);
  },
  updateProject: function(id, body) {
    return axios.put("https://jumbletron.herokuapp.com//api/project/" + id, body);
  },
  deleteProject: function(id) {
    return axios.delete("https://jumbletron.herokuapp.com//api/project/" + id);
  }
};