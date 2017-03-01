var express = require('express');
//var router = express.router();
var request = require('request');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());

var myurl = 'http://api.purdue.io/odata/Courses?$filter=Title eq ';
var course = {
   url: 'http://api.purdue.io/odata/Courses?$filter=Title eq \'Planet Earth\'',
   method: 'GET',
   qs: {
	   '@data.context': "",
	   'value': []
   }
}

request(course, function(error, response, body){
   if(error) console.log(error);
	else {
	  var json = JSON.parse(body);
	  var first = json.value[0];
	  console.log(first);
	}
});

exports.searchCourse = function(coursename, callback){
   course[url] = myurl + '\'' + coursename + '\'';
   request(course, function(error, response, body){
   if(error) return callback(error);
	else {
	  var json = JSON.parse(body);
	  var first = json.value[0];
	  console.log(first);
	  return callback(null, first);
	}
	});
   
}

exports.searchCourseId = function(coursename, callback) {
     searchCourse(coursename, function(err, course) {
       if(err) throw err
       var id = course.CourseId;
       callback(null, id);
     }
}
