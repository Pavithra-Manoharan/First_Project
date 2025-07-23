import queries from '../../queries/queries.js';

const getStatus = (req, res) => {
  req.app.locals.genericQuery(queries.getStatus, [], res);
};

export default getStatus;