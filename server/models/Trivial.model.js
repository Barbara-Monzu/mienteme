const { Schema, model } = require("mongoose");

const trivialSchema = new Schema(

	{
		questionOne: {
			text: {
				type:String, 
			},

			type: {
				type: Boolean, 
				default: true,
			}
		},

		questionTwo: {
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