const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://antan2002:2002antan@cluster0.baoicie.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err.message));
