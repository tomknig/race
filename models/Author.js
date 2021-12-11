import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema({
  name: String,
  email: String,
  ethAddress: String,
  discordUser: String,
});

module.exports =
  mongoose.models.Author || mongoose.model("Author", AuthorSchema);
