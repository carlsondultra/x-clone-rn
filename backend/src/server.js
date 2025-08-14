import express from "express";
import { ENV } from "./config/env.js";

const app = express();

app.listen(ENV.PORT, () => console.log("Server is up and running on PORT:5001"));

