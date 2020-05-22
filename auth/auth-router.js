const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./user-model");

const route = express.Router();

route.post("/register", (req, res) => {
  const credentials = req.body;
  //   const hash = bcrypt.hashSync(credentials.password, 8);
  //   credentials.password = hash;
  User.add(credentials)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = createToken(user);
        res.status(200).json({ user: user.username, token });
      } else {
        res.status(400).json({ errorMessage: "invalid credentials" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

function createToken(user) {
  const payload = {
    user: user.username,
  };
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, "secret", options);
}

module.exports = route;
