const express=require('express');
const app=express();
const PORT=5000;
const Faculty=require("./models/facultyModel");
app.use(express.json());

require('./db')
app.get("/",(req,res)=>{
    res.send("Hello World!...");
});
 //app.get("/student",(req,res)=>{
       //  res.send("Hello from student");
// });
//app.get("/faculty",(req,res)=>{
    //res.send("Hello from faculty");
//});
app.post('/faculty',async (req,res)=>{
    try{
    const data=req.body;
    const createdFaculty=new Faculty(data);
    await createdFaculty.save();
    res.send("Faculty created");
    }catch(error){
    console.log(error);
    }
});
app.get('/faculty',async (req,res)=>{
    try{
        const facultyList=await Faculty.find();
        res.send(facultyList);
    }catch(error){
        console.log(error);
    }
});

//create a resouce
//app.post()
app.put("/faculty/:id",async (req,res)=>{
    try{
        const facultyId=req.params.id;
        await Faculty.updateOne({id:facultyId},{$set:req.body});
        res.send("faculty updated")

    }catch(error){
        console.log(error);
    }
})
app.delete("/faculty/:id",async(req,res)=>{
    try{
        await Faculty.deleteOne({id:req.params.id});
        res.send("Faculty deleted");
    }catch(error){
        console.log(error);
    }
});
app.listen(PORT,function(){console.log(`Server is running on localhost:${PORT}`);
});