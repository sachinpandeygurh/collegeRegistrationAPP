const express= require('express')
const routes = express.Router()
const bodyParser = require("body-parser")


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
const UserController = require('../controller/userController')

routes.post("/register",UserController.createUser);  
routes.get("/users" , UserController.getUser )

module.exports = routes