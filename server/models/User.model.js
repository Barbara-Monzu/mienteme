const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: { 
      type: String, 
	    trim: true,
    
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

    trivial: [{
      type: Schema.Types.ObjectId, ref: "Trivial"}],
    
    role:  { 
      type: String, 
      default: "USER",
      enum: ['USER', 'ADMIN'] 
    },

    dates: [{
      type: Schema.Types.ObjectId, ref: "Date"}],
    
  },
  
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
