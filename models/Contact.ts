import mongoose from "mongoose";

const schema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required:true
  },
  desc: {
    type: String,
    required: true,
  }
  
},{
    timestamps:true
});
const model = mongoose.models.Contact || mongoose.model("Contact",schema)
export default model
