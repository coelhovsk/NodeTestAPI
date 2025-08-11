
import { Router } from "express";
import { getAllItems } from "../controllers/controller.js"

export const router = Router();

router.get('/', getAllItems)

