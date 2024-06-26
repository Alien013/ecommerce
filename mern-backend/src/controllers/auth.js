const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { validationResult } = require("express-validator");

exports.signup = async (req, res) => {
  //   const errors = validationResult(req);
  //   return res.status(400).json({ errors: errors.array() });

  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "User already registered" });
    }

    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      hash_password: hashedPassword,
      username: Math.random().toString(),
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error in user signup:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.authenticate(req.body.password)) {
        const token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
        const { firstName, lastName, email, role, fullName } = user;
        res.status(200).json({
          token,
          user: {
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({ message: "Invalid Password" });
      }
    } else {
      return res.status(400).json({ message: "Something went wrong" });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
