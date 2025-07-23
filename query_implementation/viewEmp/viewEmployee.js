import queries from '../../queries/queries.js';

// const viewEmployee = (req,res)=>{
//   req.app.locals.genericQuery(queries.viewEmployee,[],res);
// }
const viewEmployee = (req, res) => {
  const {status:statusFilter} = req.params; 

  req.app.locals.genericQuery(queries.viewEmployee, [], (err,results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (statusFilter) {
      const filtered = res.filter(emp => emp.status_name === statusFilter);
      return res.status(200).json(filtered);
    }

    res.status(200).json(results); 
  
  });
}

const view_status_employee = (req, res) => {
  const {status} = req.params;
   req.app.locals.genericQuery(queries.view_status_employee, [status], res);
    
} 
  export  {viewEmployee, view_status_employee};

