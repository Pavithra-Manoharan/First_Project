import queries from '../../queries/queries.js';

const getRef_Emp_Dept = (req, res) => {
  req.app.locals.genericQuery(queries.getRef_Emp_Dept, [], res);
};

export default getRef_Emp_Dept;