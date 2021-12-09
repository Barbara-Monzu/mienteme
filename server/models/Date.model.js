const { Schema, model } = require("mongoose");

const dateSchema = new Schema(

	{
		nameDate: {
			type: String,
			trim: true,
			required: true,
			maxlength: 50,
		},

		description: {
			type: String,
			trim: true,
			required: true,
			maxlength: 300,
		},

		picturesDate: [String],

		location: {
			type: {
				type: String,
				default: "Point",
			},
			coordinates: {
				type: [Number],
				maxlength: 2,
				index: "2dsphere",
			}
		},

		addressDate: {
			street: {
				type: String,
				trim: true,
			},
			number:{
				type: Number,
				trim: true,
			},
			city: {
				type: String,
				trim: true,
			}
		},

		category: {
			type: String,
			uppercase: true,
			trim: true,
			enum: ['GASTRONOMY', 'CULTURE', 'NATURE', 'RANDOM', 'OTHERS' ]
		},

		// day: {
		// 	type: Date,
		// },

		creator: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},

	}
)

const Date = model("Date", dateSchema);


module.exports = Date;