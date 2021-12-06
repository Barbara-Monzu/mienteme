const { Schema, model } = require("mongoose");

const trivialSchema = new Schema(

	{
		questionTrue: {
			text: {
				type:String, 
			},

			type: {
				type: Boolean, 
				default: true,
			}
		},

		questionFalse: {
			text: {

				type:String, 
			},
			
			type: {
				type: Boolean, 
				default: false,
			}
		},

		clue: {
			type: String, 
		},

		creator: {
			type: Schema.Types.ObjectId,
			ref: "User"
		}


	}
)

const Trivial = model( "Trivial", trivialSchema);


module.exports = Trivial;