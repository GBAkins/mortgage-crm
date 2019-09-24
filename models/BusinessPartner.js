const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
const relationship = ["Realtor", "Insurance Agent", "Accountant", "Business Manager", "Closing Attorney", "Home Inspector", "Banker"]


const BusinessPartnerSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    phoneNumber:{
        type: Number,
        required: true
    },
    emailAddress:{
        type: String,
        required: true
    },
    businessAddress:{
        street: String,
        city: String,
        state: {
            type: String,
            uppercase: true,
            required: true,
            enum: statesArray
        },
        zip: Number
    },
    relationshipType:{
        type: String,
        required: true,
        enum: relationship
    },
    notes:{
        type: String,
        required: false
    }
})

const BusinessPartner = mongoose.model("Business Partner", BusinessPartnerSchema);

module.exports = BusinessPartner;