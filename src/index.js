import express from "express";
import cors from "cors";
import { getProduct } from "./routes/product.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
const app = express();

app.use(cors());

app.get("/products", async (req, res) => {
  const products = await getProduct();
  res.json({ products: products });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on ${process.env.PORT}`);
});
