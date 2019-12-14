import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import path from "path";
import cors from "cors";
import routes from "./controllers";

// Express configuration
let app = express();

//app.set("views", path.join(__dirname, "../views"));

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
