const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const UserSchema = new Schema({
    username:{
        type: String,
    },
    email:{
        type:String
    },
    password:{
        type: String,
        required: true
    },
    tokens:[{
        token:{
            type:String,
            required: true
        },
    }]
})

 UserSchema.methods.jwtToken = async function () {
    const token = jwt.sign({ _id: this._id.toString() }, 'secretKey');
  
    this.tokens = this.tokens.concat({ token });
    await this.save();
  
    return token;
  };


  UserSchema.statics.findByData = async (email) => {
    const user = await User.findOne({ email });
       console.log(user,"test usereeeeeeeeeeeee");
       user.find((element)=>{
         if(element.email==email){
           return true
         }
       })
  };  

var User = mongoose.model('User', UserSchema);
module.exports = User