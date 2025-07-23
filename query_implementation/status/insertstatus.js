import queries from '../../queries/queries.js';

const insertstatus = (req, res) => {
  const insert=req.body;
  const values=insert.map(({ status_id,status_name})=>[status_id,status_name]);
 req.app.locals.genericQuery(queries.insert_status, [values], res);
};

export default insertstatus;