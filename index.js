const express = require("express");
const mongoose = require("mongoose");
const cookieParser=require('cookie-parser')
const cors = require("cors");
require("dotenv").config();
const app = express();
const { MONGO_URL, PORT } = process.env;
const AuthRoute=require('./Routes/AuthRoute')
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())
app.use('/',AuthRoute)
const TaskRouter = require("./Routes/TaskRoute");
app.use("/task", TaskRouter);

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Error in MongoDb Connection", err));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
