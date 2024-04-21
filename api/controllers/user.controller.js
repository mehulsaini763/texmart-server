import { asyncHandler } from "../utils/asyncHandler.js";

const userLogin = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "SOMETHING",
  });
});

export { userLogin };
