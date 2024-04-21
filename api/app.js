import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
// to limit the amt of json requests

app.use(express.urlencoded({ extended: true }));
// to parse different types of urls like "example.com/mehul+saini" , "example.com/mehul%20saini"

app.use(express.static("public"));
// to keep assets that might come handy

app.use(cookieParser());
// to perform various actions on client browser cookies like CRUD

// it is standard practice to import routes here

//Route imports
import adminRouter from "./routes/admin.route.js";
import userRouter from "./routes/user.route.js";
import storeRouter from "./routes/store.route.js";

// it is standard practice to use routes below imports

// routes
app.use("/api/v1/auth/admin", adminRouter);
app.use("/api/v1/auth/user", userRouter);
app.use("/api/v1/store",storeRouter);

export { app };
