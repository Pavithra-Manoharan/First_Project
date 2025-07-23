import queries from '../queries/queries.js';
import { comparePassword } from '../auth/utils.js';
import jwt from 'jsonwebtoken';


const loginUser=(req, res,callback) => {
  const { username, password } = req.body;

  req.app.locals.genericQuery(queries.getLoginByUserName, [username.trim()], (err, results) => {
    console.log(err);
    if (err) return res.status(500).json({ error: 'DB error' });
    if (results.length === 0) return res.status(404).json({ error: 'User not found' });

    const hashedPassword = results[0].password;

    comparePassword(password, hashedPassword, (err, matched) => {
      if (err) return res.status(500).json({ error: 'Password check error' });
      if (!matched) return res.status(401).json({ error: 'Invalid credentials' });
  
  
    const token = jwt.sign( { username: results[0].username },process.env.JWT_SECRET,{expiresIn:'1hr'} );
      res.status(200).json({
        message: 'Login successful',
        token: token
      });
    if(callback) callback();
      
    });
  });
};

export default loginUser;
