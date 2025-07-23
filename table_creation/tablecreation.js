import { con } from '../sql_connection/sqlconnection.js';
import queries from '../queries/queries.js';

const createTables =()=>{

con.query(queries.createDepartmentsTable,(err)=>{
    if(err)throw err;
    console.log("departments table-created")
    });

con.query(queries.createEmployeesTable,(err)=>{
    if(err)throw err;
    console.log("employees table-created")
    });
con.query(queries.createStatusTable,(err)=>{
    if(err)throw err;
    console.log("status table-created")  
    });
con.query(queries.createRef_Emp_Dept,(err)=>{
        if(err)throw err;
        console.log("Reference table for Emp_Dept created")
    });
};

export default createTables;

