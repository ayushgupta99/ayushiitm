var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Signup= new Schema(
    {username:
        {type:String},
     
       email:
         {type:String},
       password: 
         {type:String},
       repass:
         {type:String},
    },  
);
mongoose.model('sup', Signup);
