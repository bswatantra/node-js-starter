import { Router } from "express";
import * as BlogController from "../controller/BlogController.js";
const router = Router();

router.get( "/", BlogController.index );
router.post( "/store", BlogController.store );

export default router;