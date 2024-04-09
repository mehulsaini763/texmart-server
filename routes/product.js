import db from "../config/mongodb/connection.js";

const collection = db.collection("products");

export const getProduct = async (req, res) => {
  try {
    const products = await collection.find({}).toArray();
    return products
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
