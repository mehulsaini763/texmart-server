import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Admin } from "../models/admin.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const registerAdmin = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  // validation
  if (!req.file) throw new ApiError(400, "Avatar Doesn't Exists");

  if ([fullName, email, password].some((field) => field?.trim() == ""))
    throw new ApiError(400, "Some Fields are Empty");

  // check admin exsistance
  const exists = await Admin.findOne({ email: email });
  if (exists) throw new Error(400, "Email Already Exists");

  // upload image
  const avatar = await uploadOnCloudinary(req.file.path);
  // create user
  const admin = await Admin.create({
    avatar,
    fullName,
    email,
    password,
  });

  // response
  if (admin)
    res
      .status(200)
      .json(new ApiResponse(201, null, "Registered Successfully"));
});

const loginAdmin = asyncHandler(async (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "RECIEVED",
  });
});

export { registerAdmin, loginAdmin };
