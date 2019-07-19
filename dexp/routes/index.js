var express = require('express');
var router = express.Router();

require('../models/Signup');
var mongoose = require('mongoose');
var Signup = mongoose.model('Signup');

/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//GET register */
router.get('/register', function(req, res, next) {
  res.json({ login: true });
});
/*
router.post('/addd',function(req,res){
  new Superhero({name:req.body.name,
  date:req.body.date,
  username:req.body.username}
)
.save(function(err,superhero){
  console.log(superhero)
  res.json(superhero);
});
});
 router.get('/view',function(req,res){
   Superhero.find(function(err,Superhero){
     console.log(err);
     console.log(Superhero);
     res.json(Superhero);
   });
 });

 router.put('/update/:id',function(req,res){
   var query={"_id":req.params.id};
   var update={date:req.body.date};
   var options={new:true};
   Superhero.findOneAndUpdate(query,function(err,Superhero){
     console.log(Superhero);
     res.json(Superhero);
   });
 });

router.delete('/update/:id',function(req,res){
  var query = {"_id": req.params.id};
  Superhero.findOneAndRemove(query,function(err,superhero){
    console.log(superhero);
    res.json(superhero);
  })
})
*/

router.post('/addd',function(req,res){
  new Signup({username:req.body.username,
  email:req.body.email,
  password:req.body.password,
  repass:req.body.repass,
}
)
.save(function(err,Signup){
  console.log(err)
  res.json(Signup);
});
});

router.get('/view',function(req,res){
  Signup.find(function(err,sup){
    console.log(err);
    console.log(sup);
    res.json(sup);
  });
});
module.exports = router;
