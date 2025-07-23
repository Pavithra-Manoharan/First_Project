import queries from '../../queries/queries.js';


const getAllDepartments = (req, res) => {
  req.app.locals.genericQuery(queries.getAllDepartments, [], res);
};


export default getAllDepartments;