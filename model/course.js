var express = require('express');
//var router = express.router();
var request = require('request');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());

var myurl = 'http://api.purdue.io/odata/Courses?$filter=Subject/Abbreviation eq ';
var course = {
   url: '',
   method: 'GET',
   qs: {
	   '@data.context': "",
	   'value': []
   }
}

/*request(course, function(error, response, body){
   if(error) console.log(error);
	else {
	  var json = JSON.parse(body);
	  var first = json.value[0];
	  console.log(first);
	}
});*/


exports.searchCourse = function(coursename, callback){
	console.log(coursename);
	var subString = coursename.split(" ");
   	course.url = myurl + ' \'' + subString[0] + '\'' + ' and Number eq ' + ' \'' + subString[1] + '\'';
   	console.log(myurl);
   	request(course, function(error, response, body){
   	//if(error) return callback(error);
	//else {
	  var json = JSON.parse(body);
	  var first = json.value[0];
	  console.log(first);
	  return callback(null, first);
	//}
	});
};


