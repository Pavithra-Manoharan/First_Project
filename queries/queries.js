const queries = {

createLoginTable:`CREATE TABLE IF NOT EXISTS login (
  username VARCHAR(100),
  password VARCHAR(100))`,
  
createDepartmentsTable: `CREATE TABLE IF NOT EXISTS departments (
      department_id INT PRIMARY KEY,
      department_name VARCHAR(100))`,

createEmployeesTable: `CREATE TABLE IF NOT EXISTS employees (
      employee_id INT PRIMARY KEY,
      first_name VARCHAR(50),
      last_name VARCHAR(50),
      email VARCHAR(100),
      salary DECIMAL(10, 2))`,

createStatusTable:`CREATE TABLE IF NOT EXISTS status_table(
      status_id INT PRIMARY KEY,
      status_name VARCHAR(50))`,

createRef_Emp_Dept:`CREATE TABLE IF NOT EXISTS ref_emp_dept(
      employee_id INT,
      department_id INT,
      status_id INT,
      FOREIGN KEY (employee_id) REFERENCES employees(employee_id),
      FOREIGN KEY (department_id) REFERENCES departments(department_id),
      FOREIGN KEY (status_id) REFERENCES status_table(status_id))`,

registerLogin: `INSERT INTO login (username, password) VALUES (?,?)`,
insertDepartments:`INSERT IGNORE INTO departments (department_id , department_name) VALUES ?`,
insert_status : `INSERT IGNORE INTO status_table (status_id,status_name) VALUES ?`,
insertEmployees: `INSERT IGNORE INTO employees (employee_id,first_name,last_name, email,salary) VALUES ?`,
insertRef_Emp_Dept: `INSERT INTO ref_emp_dept(employee_id,department_id,status_id) VALUES ?`,


getAllEmployees: ` SELECT * FROM employees`,
getAllDepartments: `SELECT * FROM departments`,
getStatus: `SELECT * FROM status_table`,
getRef_Emp_Dept: `SELECT * FROM ref_emp_dept`,
getLoginByUserName:`SELECT * FROM login WHERE username=?`,

deleteEmployee: `UPDATE ref_emp_dept SET status_id = 1 WHERE employee_id = ? AND department_id=?`,
restoreEmployeeById: `UPDATE ref_emp_dept SET status_id = 0 WHERE employee_id = ? AND department_id = ?`,


viewEmployee: `SELECT 
  e.employee_id,
  e.first_name,
  e.last_name,
  e.email,
  e.salary,
  d.department_name,
  d.department_id,
  s.status_name
FROM ref_emp_dept r
JOIN employees e ON r.employee_id = e.employee_id
JOIN departments d ON r.department_id = d.department_id
JOIN status_table s ON r.status_id = s.status_id`,

view_status_employee : `SELECT 
  e.employee_id,
  e.first_name,
  e.last_name,
  e.email,
  e.salary,
  d.department_name,
  d.department_id,
  s.status_name
FROM ref_emp_dept r
JOIN employees e ON r.employee_id = e.employee_id
JOIN departments d ON r.department_id = d.department_id
JOIN status_table s ON r.status_id = s.status_id 
WHERE s.status_name =? `
 
};

export default queries;
