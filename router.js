import { Router } from "express";
import * as controller from "./controller.js"
const router=Router();
router.route("/addtask").post(controller.addTask)
router.route("/gettask").get(controller.getTask)
export default router;