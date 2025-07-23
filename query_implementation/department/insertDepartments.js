import queries from '../../queries/queries.js';

const insertDepartments = (req, res) => {
    const departments = req.body;
    const values = departments.map(({ department_id, department_name }) => [department_id, department_name ]);
  req.app.locals.genericQuery(queries.insertDepartments, [values], res);
};

export default insertDepartments;