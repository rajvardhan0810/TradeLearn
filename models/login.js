const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

// Connect to MongoDB using the URI from the environment variable
mongoose.connect("mongodb://localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("MongoDB connection error:", error));

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
