import { v2 as cloud } from "cloudinary";
import fs from "fs";

cloud.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET // Ensure the correct environment variable names
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) throw new Error("Local file path not available");
        const result = await cloud.uploader.upload(localFilePath, {
            resource_type: "auto"
        });
        console.log("File upload to Cloudinary successful", result.url);
        return result;
    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.error("Error uploading to Cloudinary:", error);
        throw new Error("Failed to upload image to Cloudinary");
    }
};

export { uploadOnCloudinary };
