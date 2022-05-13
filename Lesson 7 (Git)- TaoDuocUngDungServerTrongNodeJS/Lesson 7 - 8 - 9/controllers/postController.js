const postModel = require("../models/postModel");

exports.postRegister = async (req, res, next) => {
  const postData = {
    title: req.body.title,
    content: req.body.content,
  };
  const postRegister = await postModel.create(postData);
  if (postRegister) {
    res.json({ post: postRegister });
  } else {
    res.json({ err: "Create post error" });
  }
};

exports.postList = async (req, res, next) => {
  const posts = await postModel.find();
  res.json({ posts: posts });
};
