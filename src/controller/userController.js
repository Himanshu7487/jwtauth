const User = require('../model/userModel');


module.exports.createUser= async(req,res)=>{
    try{
        let user = new User(req.body);
         await user.save();
        
        const token = user.jwtToken()
        res.send({ user, token });
        
    }catch(error){
        console.log(error);
    }
}


module.exports.login = async(req, res) => {
    try {
        const user = await User.findByData(
          req.body.email,
          req.body.password,
        );
        const token = await user.jwtToken();
        // res.send({ user, token });
      } catch (error) {
        res.status(500).send('Invalid Data');
      }
}
