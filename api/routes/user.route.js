import { Router } from "express";
import { userLogin } from "../controllers/user.controller.js";

const router = Router();

router.route("/login").get(userLogin);

export default router;
