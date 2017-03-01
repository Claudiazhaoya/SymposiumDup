

//call the package we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var user = require('./user.js');
var db = require('./db.js');

//configure app to use bodyParser()
//this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; //set our port


//Connect to the database
db.connect(db,function(err) {
  if(err){
    console.log('Unable to connect to MySQL.');
    process.exit(1);
  }
});

// ROUTES FOR OUT API

var router = express.Router();

router.use(function(req, res, next) {
   console.log('something is happening.');
   next();
});
router.get('/',function(req,res) {
  res.json({message: 'test message!'});
});


//routes use for user
router.route('/users')
  .post(function(req,res) {
     user.create(req.body.id,req.body.email,req.body.password,function(err){
       if(err) console.log(err);
       else console.log('user ' + requ.body.email + ' is added')
     
     });  
   
  });


router.route('/user/sign').post(function (req,res) {
    if(

});

});




app.use('/api',router);


//start the server
app.listen(port);
console.log('port: ' + port + 'is running');

