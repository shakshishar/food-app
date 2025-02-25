
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const userSchema=new Schema(
    {
    name:{type:String, required:true,},
    email:{type:String, required:true, unique:true},
    contactno:{type:String, required:true},
    address:{type:String,required:true},
    password:{type:String, required:true}
    },
    { timestamps: true }
);

let User = mongoose?.models?.User || mongoose.model("User", userSchema);

export default User;

