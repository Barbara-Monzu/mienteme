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

    city: {
      type: String,
      max: 50,
    },

    trivial: [{
      type: Schema.Types.ObjectId, ref: "Trivial"
    }],
    
    role:  { 
      type: String, 
      default: "USER",
      enum: ['USER', 'ADMIN'] 
    },

    secondOpportunity: [{
        type: Schema.Types.ObjectId, ref: "SecondOpportunity",
       
      }],

    matchs: [{
      type: Schema.Types.ObjectId, ref: "Date",
    }],

    dates: [{
      type: Schema.Types.ObjectId, ref: "Date",
      matchs: {
        type: Schema.Types.ObjectId, ref: "User"
      }
    }],

    chat: [{
        type: Schema.Types.ObjectId, ref: "Conversation"
      }],
    
  },
  
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
