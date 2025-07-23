import queries from '../../queries/queries.js';

const insertEmployees = (req, res) => {
const employees= req.body;
const values = employees.map(({ employee_id,first_name,last_name, email,salary}) => 
     [employee_id,first_name,last_name, email,salary]);

   req.app.locals.genericQuery(queries.insertEmployees, [values], res);
};

export default insertEmployees;