import express from 'express';

import insertEmployees from '../query_implementation/employee/insertEmployees.js';
import getAllEmployees from '../query_implementation/employee/getAllEmployees.js';
import deleteEmployee from '../query_implementation/employee/deleteEmployee.js';  
import restoreEmployeeById from '../query_implementation/employee/restoreEmployeeById.js'; 
import middleware from '../auth/middleware.js';
  
 
const router = express.Router();



router.get('/', (req, res) => {
  res.send('Employee base route works!');
})
router.post('/insert',middleware, insertEmployees);
router.post('/restore/:id/:deptid', middleware,restoreEmployeeById);
router.get('/read',middleware, getAllEmployees);
router.delete('/delete/:id/:deptid',middleware, deleteEmployee);

export default router;
