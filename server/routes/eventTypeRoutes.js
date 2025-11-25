import express from "express";
import { getAllEventTypes, getEventTypeByName } from "../controllers/eventTypeController.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

router.get("/", verifyToken, getAllEventTypes);       
router.get("/:name", verifyToken, getEventTypeByName);  

export default router;
