import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadFileOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //file upload on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file is uploaded on cloudinary
    console.log("file is uploaded on cloudinary ", response.url);

    return response;
  } catch (error) {
    fs.unlink(localFilePath); //remove temp file from server if error ocuurs in upload
    return null;
  }
};

export { uploadFileOnCloudinary };
