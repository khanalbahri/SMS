import express from "express";
const router = express.Router();

import {signIn,signUp,upload} from "../controllers/user.js";

router.post("/signin",signIn);
router.post("/signup",upload.single('userImage'),signUp);

export default router;