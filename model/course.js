var mongoose = require('mongoose');
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
