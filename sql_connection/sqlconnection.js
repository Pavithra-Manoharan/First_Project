import { createConnection } from 'mysql';
import dotenv from 'dotenv';
dotenv.config();


const con = createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
 
});
con.connect((err)=>{
    if (err) throw err;
    console.log("connected to Mysql database and database created already");
});


function genericQuery(sql, params, thirdParam) {
  con.query(sql, params, (err, results) => {
    if (typeof thirdParam === 'function') {
      return thirdParam(err, results);
    }
    if (err) {
      console.error("error occurred:", err);
      return thirdParam.status(500).json({ error: err.message });
    }
    thirdParam.status(200).json(results);
    });
    }
   
export {con, genericQuery};