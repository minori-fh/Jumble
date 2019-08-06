import axios from "axios";

export default {
  createBudget: function(body) {
    return axios.post("https://jumbletron.herokuapp.com/api/budget", body);
  },
  getBudget: function(id) {
    return axios.get("https://jumbletron.herokuapp.com/api/budget/" + id);
  },
  updateBudget: function(id, body) {
    return axios.put("https://jumbletron.herokuapp.com/api/budget/" + id, body);
  }
};