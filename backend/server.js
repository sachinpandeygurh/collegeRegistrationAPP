const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require('mongoose');
const connectDb = require("./model/config"); 
const router = require('./routes/Api')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8080

mongoose.set('strictQuery',false)
connectDb()

app.use(express.json())
app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const urlencodedParser = bodyParser.urlencoded({extended: false})
app.use("/api" , urlencodedParser , router)

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})