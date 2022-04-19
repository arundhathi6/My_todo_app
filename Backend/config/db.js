
//Giving Connection to MongoDB Atlas using mongoose
const mongoose = require("mongoose");
module.exports =()=>{
 return mongoose.connect("mongodb+srv://arundhathi:arundhathi009@cluster0.mar6i.mongodb.net/todoDatabase?retryWrites=true&w=majority")
}   
