//Controllers for Backend
const User = require("../models/user");
//Hash password
const bcrypt = require("bcryptjs");



const createRegistration = async (req, res) => {
  try {
    await User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });

        await newUser.save();
        res.send("User Created");
      }
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}





module.exports = {
  createRegistration,
}