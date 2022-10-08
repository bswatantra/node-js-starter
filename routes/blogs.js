import { Router } from "express";
import * as BlogController from "../app/controller/BlogController.js";
const router = Router();

router.get( "", BlogController.index );
router.post( "", BlogController.store );

export default router;