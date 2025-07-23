import queries from '../../queries/queries.js';

const getAllEmployees = (req, res) => {
  req.app.locals.genericQuery(queries.getAllEmployees, [], res);
};

export default getAllEmployees;