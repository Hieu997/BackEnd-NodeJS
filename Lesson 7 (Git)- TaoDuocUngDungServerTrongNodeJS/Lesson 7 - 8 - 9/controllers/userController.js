const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.userRegister = async (req, res, next) => {
  const user = await userModel.findOne({ username: req.body.username });
  if (user) {
    res.redirect("/user/register");
  }
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const userData = {
    username: req.body.username,
    password: passwordHash,
  };
  const userNew = await userModel.create(userData);
  if (userNew) {
    res.redirect("/user/login");
  } else {
    res.redirect("/user/register");
  }
};

exports.userLogin = async (req, res, next) => {
  const user = await userModel.findOne({ username: req.body.username });
  if (user) {
    const compatePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!compatePassword) {
      res.json({ err: "Login fail" });
    } else {
      let payload = { user_id: user.id, username: user.name };
      const token = jwt.sign(payload, "hieu", { expiresIn: 3600 });
      return res.json({ token: token, code: 200 });
    }
  } else {
    return res.json({ err: "Login fail" });
  }
};
