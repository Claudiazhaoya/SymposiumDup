var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
	post_id:{
	  type:String
	}
	user_id:{
	  type:String
	}
	countUp: Number
});
var postSchema = mongoose.Schema({
	infomation: {
	  type: String,
	  index:true
	},
	
	course_id: {
	  type: String
	},
	user_id:{
	  type: String
	}
	timeStamp: {
	  type: Date,
	  default: Date.now
        }
	rating: [ratingSchema]
	main_post_id: {
	  type: String
	}
 }

var post = module.exports = mongoose.model('post', postSchema);

module.exports.createPost = function(newPost, callback) {
    newUser.save(callback);
}

module.exports.getPostByCourseId = function(course_id, callback) {
    var query = {course_id : course_id, main_post_id : null };
    User.find(query, callback);
}

module.exports.getPostByMainPost = function(post_id, callback) {
    var query = {main_post_id : post_id};
    user.findone(query,callback);
}
