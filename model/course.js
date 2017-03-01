var mongoose = require('mongoose');
<<<<<<< HEAD

var CourseSchema = mongoose.Schema({
   courseId: {
     type: String
   },
   

   
});
=======
var textSearch = require('mongoose-text-search')

// Course Schema
var CourseSchema = mongoose.Schema({
  coursename: {
    type: String
  },
  description: {
    type: String
  }
});

var Course = module.exports = mongoose.model('Course', CourseSchema);

module.exports.searchCourse = function(coursename, callback) {
  var query = {coursename: coursename};
  Course.findOne(query, callback);
};
>>>>>>> 8bd052bc5041d5ffa2245f9a8e7b3f0f6e83c0e7
