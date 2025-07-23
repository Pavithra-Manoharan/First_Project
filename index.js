import express from 'express';
import { con, genericQuery } from './sql_connection/sqlconnection.js';
import employeeRoutes from './routes/employeesroute.js';
import departmentRoute from './routes/departmentsroute.js';
import statusRoute from './routes/statusroute.js';
import viewemployeesroute from './routes/viewemployeesroute.js';
import ref_emp_dept from './routes/ref_emp_dept.js'
import registerUser from './auth/registeruser.js';
import loginUser from './auth/loginuser.js';
import tables from './table_creation/tablecreation.js';
import middleware from './auth/middleware.js';

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.locals.genericQuery = genericQuery;

let tablesCreated = false;

app.post('/register', registerUser);
app.post('/login',loginUser);

// app.post('/login', (req, res) => {
//   loginUser(req, res, () => {
//     if (!tablesCreated) {
//       tables(); 
//       tablesCreated = true;
//       console.log("Tables created after first login.");
//     }
//   });
// });
tables();

app.use('/departments', departmentRoute);
app.use('/employees', middleware, employeeRoutes);
app.use('/',statusRoute);
app.use('/',viewemployeesroute);
app.use('/',ref_emp_dept);

app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});
