import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use("/tasks", taskRoutes)

const CONNECTION_URL = "mongodb+srv://admin-armanto:6942096892@taskmanager.4lrbg.mongodb.net/taskManagerDB?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=> console.log("Server running")))
    .catch((error)=>console.log(error))