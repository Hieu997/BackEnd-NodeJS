const mongoose = require("mongoose");
const schema = mongoose.Schema;

const BlogPostSchema = new schema({
  title: String,
  body: String,
});
module.exports = mongoose.model("BlogPost", BlogPostSchema);
