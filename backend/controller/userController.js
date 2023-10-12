const userModel = require("../model/user");


//register user
exports.createUser = async (req, res) => {
    try {
      const newUser = await userModel(req.body); 
      await newUser.save();
      res.json(newUser);
    } catch (error) {
      console.log("Error", error);
    }
  }

// view Read user 

exports.getUser = async (req, res) => {
    try {
      const users = await userModel.find(); 
      const result = res.status(200).json(users);
      console.warn(result);
    } catch (error) {
      console.error("Error", error);
      res.status(500).json({ error: "Server error" });
    }
  };
  