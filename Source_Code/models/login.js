const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
  name: { type: String },
  username: { type: String },
  skill: { type: String },
  email: { type: String },
  github: { type: String },
  linkedin: { type: String },
  profilePic: { type: String, default: "dummyUser.jpg" },
  password: { type: String },
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('login', loginSchema);
