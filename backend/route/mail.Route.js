import express from "express";
import { sendMail } from "../controller/sendMail.js";


const router = express.Router();

router.route('/mail').post(sendMail)

export default router;