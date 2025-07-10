import express from "express";
import { formController } from "../controllers/form.controller.js";

const router = express.Router();

router.post("/user-message", formController);

export default router;
