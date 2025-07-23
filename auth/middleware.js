import jwt from 'jsonwebtoken';


 const middleware=(req,res,next)=>{
    const header = req.header('Authorization');
    if(!header){
        return res.status(401).send({message : "access denied, no token provided"});
    }
    const token=header.replace('Bearer ','').trim();
    const decodedUser = jwt.verify(token,process.env.JWT_SECRET);
    req.user=decodedUser;
    next();
 }
 export default middleware;