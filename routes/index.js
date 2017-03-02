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

<<<<<<< HEAD
=======
router.get('/course', function(req,res,next) {
    res.render('course');
});

>>>>>>> b7c3b0453e3cf3802a1ff468e86d4cbc0207d543
function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

<<<<<<< HEAD
Course.create({coursename: 'cs307', description: 'hi'}, function(err) {
	if (err) console.log("error");
	else console.log("307 added to db");
});


/* Search courses */
router.post('/', function(req, res, next) {
	Course.searchCourse(req.body.coursename, function(err, course) {
		if (err) throw err;
		if (!course) {
			res.redirect('/error');
		} else {
			res.redirect('/users/signup');
			console.log(course);
		}
	});
});

/* For Error page needs modification for later */
router.post('/error', function(req, res, next) {
	Course.searchCourse(req.body.coursename, function(err, course) {
		if (err) throw err;
		if (!course) {
			res.redirect('/error');
		} else {
			res.redirect('/users/signup');
		}
=======
/* Search courses */
router.post('/', function(req, res, next){
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
			res.redirect('/course');
		}
	        
>>>>>>> b7c3b0453e3cf3802a1ff468e86d4cbc0207d543
	});
});


module.exports = router;
