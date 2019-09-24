import axios from "axios";

export default {
    // Gets all BPs
    getBusinessPartners: function() {
        return axios.get("/api/businessPartners");
    },
    // Gets the BP with the given id
    getBusinessPartner: function(id) {
        return axios.get("/api/businessPartners/" + id);
    },
    // Deletes the BP with the given id
    deleteBusinessPartner: function(id) {
        return axios.delete("/api/businessPartners/" + id);
    },
    // Saves a BP to the database
    saveBusinessPartner: function(businessPartnerData) {
        return axios.post("/api/businessPartners", businessPartnerData);
    },
    // Updates existing BP in db
    updateBusinessPartner: function(id){
        return axios.put("/api/businessPartners/" + id);
    }
};