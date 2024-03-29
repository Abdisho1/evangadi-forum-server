require("dotenv").config();
const pool = require("./config/database");
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT;

//routes
const userRouter = require("./api/users/user.router");
const questionRouter = require("./api/questions/questions.router");
const answerRouter = require("./api/answers/answers.router");
const resetPasswordRouter = require("./api/reset/reset.router");

//Configur 
const corsOptions = {
  origin: "https://evangadi-forum-clone-frontend-abdi.netlify.app/login",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

//Midlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answers", answerRouter);
app.use("/api/forgot-password", resetPasswordRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
