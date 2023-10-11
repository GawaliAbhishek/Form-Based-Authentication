const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect("mongodb+srv://abhishekgawali306:Piyush123@cluster0.drywgss.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Connected with Database");
}).catch((err) => { console.log(err); });

