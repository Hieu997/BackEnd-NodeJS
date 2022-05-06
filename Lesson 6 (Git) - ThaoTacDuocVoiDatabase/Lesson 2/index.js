const mongoose = require("mongoose");

const blogPostModel = require("./models/BlogPost.Schema");
const db = mongoose.connection;
const DB_URL = "mongodb://admin:123456@127.0.0.1:27017/lesson6";
mongoose.connect(DB_URL, { useNewUrlParser: true }).then(() => {
  console.log("Connect");
});
db.on("error", (err) => {
  console.log("Db connect err");
});

const createBlogPost = async () => {
  const blogPost = await blogPostModel.create({
    title: "Đây là tiêu đề bài viết",
    body: "Đây là nội dung bài viết",
  });
};
//createBlogPost();

const findBlogPost = async () => {
  const blogPost = await blogPostModel.find({
    title: "Đây là tiêu đề bài viết",
  });
  console.log(blogPost);
};
//findBlogPost();

const findByUpdateBlogPost = async () => {
  const blogPost = await blogPostModel.findByIdAndUpdate({
    _id: "6274ffb680f1bbffd4790a4c",
    title: "Update title",
  });
  console.log(blogPost);
};
//findByUpdateBlogPost();

const findByDeleteBlogPost = async () => {
  const blogPost = await blogPostModel.findByIdAndDelete({
    _id: "6274ff8291e1b131ded3d648",
  });
  console.log(blogPost);
};
//findByDeleteBlogPost();
