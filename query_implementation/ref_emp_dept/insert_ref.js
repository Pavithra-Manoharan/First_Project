import queries from '../../queries/queries.js';

const insert_ref = (req, res) => {
const ref= req.body;
const values = ref.map(({employee_id,department_id,status_id }) => 
     [employee_id,department_id,status_id]);

   req.app.locals.genericQuery(queries.insertRef_Emp_Dept, [values], res);
};

export default insert_ref;