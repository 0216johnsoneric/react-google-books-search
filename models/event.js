const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
	title: { type: String, required: true },
	authors: [{ type: String, required: true }],
	description: String,
	image: String,
	link: String,
});

const Event = mongoose.model("Book", eventSchema);

module.exports = Event;
