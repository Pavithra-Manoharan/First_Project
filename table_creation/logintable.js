import { con } from '../sql_connection/sqlconnection.js';
import queries from "../queries/queries.js";

const logintable=()=>{
con.query(queries.createLoginTable,(err)=>{
    if(err)throw err;
    console.log("login table created for storing username and password")
});
}
export default logintable;