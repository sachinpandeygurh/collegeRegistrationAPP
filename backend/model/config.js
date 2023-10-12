const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const mongo_uri = process.env.REACT_APP_MONGO_URI

const connectDB = async()=>{
    try {
        await mongoose.connect(mongo_uri, { useNewUrlParser: true });

    } catch (error) {
        console.log("Error" , error)
        
    }
}
module.exports = connectDB
