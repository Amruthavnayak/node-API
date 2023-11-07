const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Amrutha:Mongodb21@cluster0.xs6vwgt.mongodb.net/?retryWrites=true&w=majority',
{
    useUnifiedTopology:true,
    useNewUrlParser:true,
}   
)
.then((response)=>{
    console.log("Connected to Database");
})
.catch((error)=>{
    console.log(error);
});



