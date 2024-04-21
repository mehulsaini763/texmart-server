import { Router } from "express";
import { loginAdmin, registerAdmin } from "../controllers/admin.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(upload.single("avatar"), registerAdmin);
router.route("/login").get(loginAdmin);

export default router;
