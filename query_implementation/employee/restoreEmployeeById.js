import queries from '../../queries/queries.js';

const restoreEmployeeById = (req, res) => {
  const { id: employee_id, deptid: department_id } = req.params;

  req.app.locals.genericQuery(queries.restoreEmployeeById, [employee_id, department_id], (err, result) => {
    if (err) {
      console.error('Restore error:', err);
      return res.status(500).json({ error: 'Failed to restore employee' });
    }
    res.status(200).json({ message: 'Employee restored successfully' });
  });
};

export default restoreEmployeeById;