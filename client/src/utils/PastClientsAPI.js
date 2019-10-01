import axios from "axios";

export default {
  // Gets all PCs
  getPastClients: function() {
    return axios.get("/api/pastClients");
  },
  // Gets the PC with the given id
  getPastClient: function(id) {
    return axios.get("/api/pastClients/" + id);
  },
  // Deletes the PC with the given id
  deletePastClient: function(id) {
    return axios.delete("/api/pastClients/" + id);
  },
  // Saves a PC to the database
  savePastClient: function(pastClientData) {
    return axios.post("/api/pastClients", pastClientData);
  },
  // Updates an existing PC in the db
  updatePastClient: function(id){
    return axios.put("/api/pastClients/" + id);
  }
};
