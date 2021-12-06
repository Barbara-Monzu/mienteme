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

    profileImg: {
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
    },

    bio: {
      type: String,
    },

    city: {
      type: String,
      max: 50,
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

    chatMatchs: [{
      type: Schema.Types.ObjectId, ref: "Date",
    }],

    dates: [{
      type: Schema.Types.ObjectId, ref: "Date",
      matchs: [{
        type: Schema.Types.ObjectId, ref: "User"
      }]
    }],

    conversation: [{
        type: Schema.Types.ObjectId, ref: "Conversation"
      }],
    
  },
  
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
