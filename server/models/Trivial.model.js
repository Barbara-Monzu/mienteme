const { Schema, model } = require("mongoose");

const trivialSchema = new Schema(

	{
		isTrue: {
			type: String,
			trim: true,
			required: true,
			maxlength: 150,
		},

		isFalse: {
			type: String,
			trim: true,
			required: true,
			maxlength: 150,
		},


	}
)

const Trivial = model( "Trivial", trivialSchema);


module.exports = Trivial;