import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import mongoose from "mongoose";

import path from "path";
import cors from "cors";
import routes from "./controllers";
import { initPlayers } from "./init";

// Express configuration
let app = express();

// Mongo connection
const { MONGODB_URI = "mongodb://127.0.0.1:27017/local2" } = process.env;

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err: any) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Successfully Connected!!");
    }
  }
);

// set up cors middleware
app.use(cors());

// set up compression middleware
app.use(compression());

// set up parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use("/", routes);

// set port for server
const { PORT = 3000 } = process.env;
// start server
app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
