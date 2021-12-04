const { Schema, model } = require("mongoose");

const dateSchema = new Schema(

	{
		name: {
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

		pictures: [String],

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

		address: {
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
			trim: true,
			enum: ['gastronomy', 'culture', 'others']
		},

		day: {
			type: String,

		},

		hour: {
			type: Number,

		},
		
		creator: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},
	}
)

const Date = model("Date", dateSchema);


module.exports = Date;