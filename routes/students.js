import Express from "express";
import { addStudent, listStudents } from "../controllers/student.js";
const router = Express.Router();

router.post("/", addStudent)
router.post("/list", listStudents)

export default router;