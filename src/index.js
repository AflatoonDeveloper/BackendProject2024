import dotenv from 'dotenv';
import conectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config();
const port = process.env.PORT || 5012;

conectDB()

.then(()=>{
        app.listen(port, ()=>{
            console.log(`server will be running on PORT ${port}`)
        } )
    }
)
.catch((e)=>{
    console.log("connection faild in mongodb !! " + e)

})

















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
