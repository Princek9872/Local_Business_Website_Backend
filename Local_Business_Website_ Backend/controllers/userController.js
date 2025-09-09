const User = require('../models/User');

//Get all users
const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

//Create user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.status(201).json(user);
};

module.exports = { getUsers, createUser };
