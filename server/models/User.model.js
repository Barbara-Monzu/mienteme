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
      enum: ['WOMAN', 'MEN', 'I DON NOT IDENTIFY WITH ANY GENDER' ],
      required: true,
    },

    bio: {
      type: String,
    },

    filter: { 
      genderFilter: {
        type: String,
        enum: ['WOMEN', 'MEN', 'BOTH' ],
        uppercase: true,
        required: true,
        default: 'BOTH',
      },

      ageFilter: {
        type: [Number],
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
        text: {
          type: String, 
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
    
    role:  { 
      type: String, 
      default: "USER",
      enum: ['USER', 'ADMIN'] 
    },

    CheckFirstForm: {
      type: Boolean, 
      default: false,
    }
    
  },
  
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
