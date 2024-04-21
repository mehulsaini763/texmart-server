import { Store } from "../models/store.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createStore = asyncHandler((req, res) => {
  Store.create(req.body).catch((err) => console.log(err));
  res.status(201).json({
    success: true,
    message: "Store Created Successfully",
  });
});

export { createStore };
