import mongoose from "mongoose";
import { DB_name } from "./constanta.js";
import express from "express";
import dotenv from 'dotenv';
import conectDB from "./db/index.js";

dotenv.config();

conectDB()
const app = express();
















// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB");

//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     } catch (error) {
//         console.error("ERROR: Failed to connect to the database " + error);
        
//     }
// })();
