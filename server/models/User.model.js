const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { 
      type: String, 
	    trim: true,
      min: 3,
      max: 20,
    
    },

    password: {
	    type: String,
	    required: true,

	  },

    profileImages: {
      type: [String],
      default: "",

    },
    
    email: {
      type: String, 
      lowercase: true,
      required: [true, "can't be blank"], 
      match: [/\S+@\S+\.\S+/, 'is invalid'], 
      index: true,
	    unique: true

    },

    age: {
      type: Number,
      min: 18

    },

    gender: { 
      type: String,
      uppercase: true,
      default: 'I DON NOT IDENTIFY WITH ANY GENDER',
      enum: ['WOMAN', 'MAN', 'I DON NOT IDENTIFY WITH ANY GENDER' ],
      required: true,

    },

    bio: {
      type: String,

    },

    filter: { 
      genderFilter: {
        type: String,
        enum: ['WOMAN', 'MAN', 'BOTH' ],
        uppercase: true,
        required: true,
        default: 'BOTH',

      },

      ageFilter: {
        type: [String],
        required: true,
        default: [18, 80],
        min: 18,
        max: 80

      },

    },

    city: {
      type: String,
      max: 50,
      uppercase: true,

    },

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

    questionTrue: {
          type: String, 

      },
  
      questionFalse: {
        type: String,

      },
  
      clue: {
        type: String, 
      },
    
    role:  { 
      type: String, 
      default: "USER",
      enum: ['USER', 'ADMIN'] 
    },
    
  },
  
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
