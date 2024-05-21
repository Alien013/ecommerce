const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/auth");
const {
  validateSignupRequest,
  validateSigninRequest,
} = require("../validators/auth");
const { validationResult } = require("express-validator");

const isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }
  next();
};

router.post(`/signup`, validateSignupRequest, isRequestValidated, signup);
router.post(`/signin`, validateSigninRequest, isRequestValidated, signin);

module.exports = router;
