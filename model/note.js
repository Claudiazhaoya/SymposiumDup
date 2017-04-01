var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
	filename: {
		type: String
	},
	link: {
		type: String
	},
	time: {
		type: Date
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