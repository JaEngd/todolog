const todos = require ("./routes/todos")
const signUp = require("./routes/signUp")
const signIn = require("./routes/signIn")
const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv").config(); 

mongoose.set('strictQuery', true); 
 
app.use(cors())
app.use(express.json()) //Middleware function that passes json in the request

app.use("/api/todos", todos)
app.use("/api/signup", signUp)
app.use("/api/signin", signIn)

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



