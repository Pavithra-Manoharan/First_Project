import express from 'express';

import { viewEmployee, view_status_employee } from '../query_implementation/viewEmp/viewEmployee.js';

const router=express.Router();
router.get('/employees/view',viewEmployee);
router.get('/employees/:status',view_status_employee);

export default router;