const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const authentication = async (req, res, next) => {
    try {
      const token = req.header('Authorization').replace('Bearer ', '');
      const decoded = jwt.verify(token, 'secretSignature');
      const user = await User.findOne({
       
        _id: decoded._id,
        'tokens.token': token,
      });
  
      if (!user) {
        throw new Error();
      }
  
      req.token = token;
      req.user = user;
      next();
    } catch (e) {
      res.status(401).send({
        error: 'User not found',
      });
    }
  };
  
  module.exports = authentication;
