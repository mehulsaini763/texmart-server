import express from "express";
import cors from "cors";
import { getProduct } from "./routes/product.js";

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/products", (req, res) => {
  getProduct()
  res.json({
    status : "WORKING"
  });
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
