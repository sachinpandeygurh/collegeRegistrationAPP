const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true , "Plase enter name"]
    } ,
    collageName: {
        type: String,
        required : [true , "Plase enter name"]
    } ,
    mobileNumber: {
        type: String,
        required : [true , "Plase enter name"]
    } ,
    gmailAddress: {
        type: String,
        required : [true , "Plase enter name"]

    },
    dateOfBirth: {
        type: String,
        required : [true , "Plase enter name"]
    }

}, {timeStamps : true})

module.exports = mongoose.model("user" , userSchema)



