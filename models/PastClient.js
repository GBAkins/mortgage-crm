const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
const loanType = ["Refinance", "Purchase"];


const PastClientSchema = new Schema({
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
    streetAddress:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        uppercase: true,
        required: true,
        enum: statesArray,
    },
    zipCode:{
        type: Number,
        required: true
    },
    closingDate:{
        type: Date,
        required: true
    },
    loanType:{
        type: String,
        required: true,
        enum: loanType
    },
    loanAmount:{
        type: Number,
        required: true
    },
    interestRate:{
        type: Number,
        required: true
    },
    notes:{
        type: String,
        required: false
    }
})

const PastClient = mongoose.model("Past Client", PastClientSchema);

module.exports = PastClient;