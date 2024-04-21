import { Schema, model } from "mongoose";

const storeSchema = new Schema(
  {
    storeName: {
      type: String,
      required: true,
      unique: true,
    },
    adminId: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

export const Store = model("Store", storeSchema);
