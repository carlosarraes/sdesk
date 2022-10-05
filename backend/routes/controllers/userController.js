const asyncHandler = require('express-async-handler');

// /api/users - Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.send('Register Route');
});

// /api/users/login - Public
const loginUser = asyncHandler(async (req, res) => {
  res.send('Login Route');
});

//setitut:tutz1234
module.exports = {
  registerUser,
  loginUser,
};
