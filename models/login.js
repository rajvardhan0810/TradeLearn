const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

// Connect to MongoDB using the URI from the environment variable
mongoose.connect("mongodb+srv://rajvardhantiwari008:Raj08102004@cluster0.w2wtw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
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
  password: { type: String },
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

module.exports = mongoose.model('login', loginSchema);
