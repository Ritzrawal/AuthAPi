var mongoose = require('mongoose');
var Schema = mongoose.Schema;
loginSchema = new Schema( {
	unique_id: Number,
	email: String,
	password: String,
}),
Username = mongoose.model('Username',loginSchema);
module.exports = Username;