import queries from '../queries/queries.js';
import { hashPassword } from '../auth/utils.js';
import logintable from '../table_creation/logintable.js'

logintable();

const registerUser = (req, res) => {
  const { username, password } = req.body;

  hashPassword(password, (err, hashedPassword) => {
      if (err) return res.status(500).json({ error: 'Password hashing failed' });

      req.app.locals.genericQuery(queries.registerLogin,[username.trim(), hashedPassword],(err) => {
       
        if (err) return res.status(500).json({ error: 'Registration failed' });
        
        res.status(201).json({ message: 'User registered successfully' });
      }
    );
  });
};

export default registerUser;
