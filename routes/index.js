import { Router } from "express";
const router = Router();

import Blog from '../routes/blogs.js';

router.use( "/blogs", Blog );

export default router;