import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

import dotenv from "dotenv";
dotenv.config("./.env");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (path) => {
  try {
    if (!path) return null;
    const response = await cloudinary.uploader.upload(path, {
      resource_type: "image",
    });
    return response.url;
  } catch (err) {
    console.log(err);
    return null;
  } finally {
    fs.unlinkSync(path);
  }
};

export { uploadOnCloudinary };
