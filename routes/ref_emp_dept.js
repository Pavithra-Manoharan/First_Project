import express from "express";
import insert_ref from "../query_implementation/ref_emp_dept/insert_ref.js";
import get_ref from "../query_implementation/ref_emp_dept/get_ref.js";

const router = express.Router();

router.post('/insertreference',insert_ref);
router.get('/referencetable',get_ref);

export default router;
 