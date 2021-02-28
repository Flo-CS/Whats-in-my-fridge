const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser")
require("dotenv").config();


const config = require("./config");

// Setup DB connection
mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("DB connected :)"))
    .catch((error) => console.log(error));

// Routes
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

// Setup Express App
const App = express();

// Middlewares
App.use(morgan("combined"));
App.use(cookieParser());
App.use(cors({credentials: true, origin: true}));
App.use(bodyParser.json());

// Routers
App.use(`${config.API_ENDPOINT}/products`, productRoute);
App.use(`${config.API_ENDPOINT}/auth`, userRoute);

App.listen(config.PORT, () => {
    console.log("I'm running :)");
});