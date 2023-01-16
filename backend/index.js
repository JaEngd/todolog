const express = require ("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config(); 

mongoose.set('strictQuery', true); 

app.get("/", (req, res) => {
    res.send("Welcome!")
})

const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connection established..."))
.catch((error) => console.error("MongoDB connection failed:", error.message))
mongoose.Promise = Promise;

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})



