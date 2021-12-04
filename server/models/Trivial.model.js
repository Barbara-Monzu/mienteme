const { Schema, model } = require("mongoose");

const trivialSchema = new Schema(

	{
		questionOne: {
			texto: {
				type:String, 
			},

			tipo: {
				type: Boolean, 
				default: true,
			}
		},

		questionTwo: {
			texto: {

				type:String, 
			},
			
			tipo: {
				type: Boolean, 
				default: false,
			}
		},


	}
)

const Trivial = model( "Trivial", trivialSchema);


module.exports = Trivial;