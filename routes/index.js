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

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		res.redirect('/users/login');
	}
}

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
	});
});


module.exports = router;
