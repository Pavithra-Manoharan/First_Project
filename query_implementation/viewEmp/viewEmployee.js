import queries from '../../queries/queries.js';

const viewEmployee = (req,res)=>{
  req.app.locals.genericQuery(queries.viewEmployee,[],res);
}
const view_status_employee = (req, res) => {
  const {status } = req.params;
   req.app.locals.genericQuery(queries.view_status_employee, [status], res);
    
} 
    export  {viewEmployee, view_status_employee};