import queries from '../../queries/queries.js';

const deleteEmployee = (req, res) => {
  const {id:employee_id,deptid:department_id } = req.params;

    req.app.locals.genericQuery(queries.deleteEmployee, [employee_id,department_id ], res);
    console.log("employee table deleted with specific id");
  };

  export default deleteEmployee;