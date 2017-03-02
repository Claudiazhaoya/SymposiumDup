var express = require('express');
var router = express.Router();
var localStorage = require('localStorage');
var bodyParser = require('body-parser');
//add
var Course = require('../model/course');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET error page. */
router.get('/error', function(req, res, next) {
  res.render('error');
});


router.get('/course', function(req,res,next) {
      console.log('index course');
      var json = JSON.parse(localStorage.getItem('Course'));
      console.log('local Storage' + json.Title);
      res.render('course', {Title : json.Title+'', CH : json.CreditHours+'', DC : json.Description+''});
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

router.param('/',function(req,res,next) {
   req.Title = 'ddddd';
});

/* Search courses */
router.post('/', function(req, res, next){
	console.log('search course');
	//console.log(req.body.coursename);
	Course.searchCourse(req.body.coursename, function(err, course) {
		if (err) {
			res.redirect('/error');
		}
		else {
			req.body.Title = 'dddd';
			localStorage.setItem('Course',JSON.stringify(course));
			//res.render('index',{Title: course})
				//,function(err){
			   res.redirect('/course');
		       //	});
		}

	});
});


module.exports = router;
