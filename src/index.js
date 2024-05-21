// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";

import connectDb from "./db/db.js";

dotenv.config({ path: "./env" });

connectDb();
