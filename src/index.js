// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// ( async () => {
//     try {
//        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(error);
//     }
// })()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});
connectDB();
