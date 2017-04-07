var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
	filename: {
		type: String
	},
	link: {
		type: String
<<<<<<< HEAD
=======
	},
	size: {
		type: Number
	},
	time: {
		type: String
>>>>>>> 3ccfd1882a1f4f8acb0c2eac9c17a91a6578ac9d
	}
});

var Note = module.exports = mongoose.model('Note', NoteSchema);

module.exports.createNote = function(newNote, callback){
	newNote.save(callback);
};

module.exports.getNoteByFilename = function(filename, callback){
	var query = {filename: filename};
	Note.findOne(query, callback);
};