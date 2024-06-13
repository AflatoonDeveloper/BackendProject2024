import {v2 as cloud} from "cloudinary";
import { on } from "events";
import fs from "fs";

cloud.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_api_key, 
    api_secret: process.env.ACCESS_TOKEN_SECRET // Click 'View Credentials' below to copy your API secret
});


const uploadOnColudinary = async (localFilePath) =>{
    try {
        if(!localFilePath) return console.error("local file path not avelable ")
           const rezult = await cloud.uploader.upload(localFilePath, {
               resource_type:"auto"
            })
            console.log("file upload in cloudinary success",rezult.url);
            return rezult;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return console.log("error to upload cathch")
    }
}

export  {uploadOnColudinary}