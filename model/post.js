var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
	post_id:{
	  type:String
	},
	user_id:{
	  type:String
	},
	countUp: Number
});
var postSchema = mongoose.Schema({
	information: {
	  type: String,
	  index:true
	},
	
	course_id: {
	  type: String
	},
	user_id:{
	  type: String
	},
	timeStamp: {
	  type: Date,
	  default: Date.now
        },
	rating: [ratingSchema],
	main_post_id: {
	  type: String
	}
 });

var post = module.exports = mongoose.model('post', postSchema);
module.exports.createPost = function(newPost, callback) {
    console.log('creating the post');
    newPost.save(callback);
}


module.exports.getPostByCourseId = function(course_id, callback) {
    console.log('get post by course id');
    var query = {course_id : course_id, main_post_id : null };
    post.find(query,callback);
    
}

module.exports.getPostByMainPost = function(post_id, callback) {
    var query = {main_post_id : post_id};
    post.find(query,callback);
}

module.exports.deletePostById = function(post_id, callback) {
    var query = {_id : post_id};
    post.findOneAndRemove(query,function(err, post) {
       if(err) throw err;	
	console.log('post: '+ post_id + 'is deleted!');
    });
}

//module.exports.updataPostById = function(
