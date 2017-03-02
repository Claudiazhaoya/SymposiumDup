var express = require('express');
var router = express.Router();

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
    res.render('course');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

/* Search courses */
router.use('/', function(req, res, next){
	console.log('search course');
	//console.log(req.body.coursename);
	Course.searchCourse(req.body.coursename, function(err, course) {
		console.log('hi.5');
		if (err) {
			console.log('hi');
			res.redirect('/error');
		}
		else {
			console.log('hi2');
		} 
	});
});


module.exports = router;
