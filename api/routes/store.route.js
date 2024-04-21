import { Router } from "express";
import { createStore } from "../controllers/store.controller.js";

const router = Router();

router.route("/create").post(createStore);

export default router;
