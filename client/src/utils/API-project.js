import axios from "axios";

export default {
  findProjects: function() {
    return axios.get("/api/project");
  },
  createProject: function(param) {
    return axios.post("/api/project", param);
  },
  getProject: function(id) {
    return axios.get("/api/project/" + id);
  },
  updateProject: function(id) {
    return axios.put("/api/project/" + id);
  },
  deleteProject: function(id) {
    return axios.delete("/api/project/" + id);
  }
};