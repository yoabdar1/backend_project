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
import  app  from "./app.js";

dotenv.config({
  path: "./.env",
});
connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port: ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("MongoDB connection falied !!!", err)
})
