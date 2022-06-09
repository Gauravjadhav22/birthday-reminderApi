const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dob:{
        type:String,
        required:true
    },
    contact: {
      type: String,
    },
    age:{
        type:Number
    }
  
  },

  { timestamps: true }
);

module.exports = mongoose.model("Person", PersonSchema);
