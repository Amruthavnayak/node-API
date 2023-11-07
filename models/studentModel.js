const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    sem:Number,
    branch:String,
});
module.exports=mongoose.model("Student",studentSchema);