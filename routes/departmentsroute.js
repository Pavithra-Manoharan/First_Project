import express from 'express';
import insertDepartments from '../query_implementation/department/insertDepartments.js';
import getAllDepartments from '../query_implementation/department/getAllDepartments.js';

const router = express.Router();

router.post('/insert', insertDepartments);
router.get('/read', getAllDepartments);

export default router;
