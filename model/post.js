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
 }
