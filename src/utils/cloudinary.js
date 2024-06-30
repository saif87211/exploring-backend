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
    // console.log("file is uploaded on cloudinary ", response.url);
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlink(localFilePath); //remove temp file from server if error ocuurs in upload
    return null;
  }
};

const deleteFileOnCloudinary = async (url) => {
  if (!url) return null;
  
  const urlParts = url.split("/");
  const imagePublicId = urlParts[urlParts.length - 1].slice(0, -4);

  const response = await cloudinary.uploader.destroy(imagePublicId, {
    resource_type: "auto",
  });

  return response;
};

export { uploadFileOnCloudinary, deleteFileOnCloudinary };
