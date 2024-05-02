const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./dbconnect");
const dotenv = require("dotenv").config();
const app = express(); // Initialize express app once

const httpServer = require('http').createServer(app);

const PORT = process.env.PORT

const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

dbConnect();

app.use(morgan("dev"));
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/banner", require("./bannerRoute"))






httpServer.listen(PORT, () => {
    console.log(`Doctor Server is running at PORT ${PORT} 🏥 🚑 🏥 🚑`);
});
