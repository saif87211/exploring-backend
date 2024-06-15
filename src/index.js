// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";

import connectDb from "./db/db.js";

import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDb()
  .then(() => {

    app.on("error",(error)=>{
        console.log("Error on App: ",error);
        throw error;
    });

    app.listen(process.env.PORT || 8000, () =>
      console.log(`⚙ server is running at port ${process.env.PORT}`)
    );
  })
  .catch((error) => console.log("DB Connection Error!!! ", error));
