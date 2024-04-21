import { connectDB } from "./db/connection.js";
import { app } from "./app.js";

import dotenv from 'dotenv'
dotenv.config('./.env')

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server ready on port ${PORT}.`));
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed");
    process.exit(1);
  });
