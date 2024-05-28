import mongoose from "mongoose";
import { DB_name } from "../constanta.js";

const conectDB = async () =>{
    try {

        const conectedMongodb = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
        console.log(`database connect successfully on : ${conectedMongodb.connection.host}`)
        
    } catch (error) {
        console.log("ERROR: to connect database" + error)
    }
}

export default conectDB