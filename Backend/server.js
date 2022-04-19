//connecting MongoDBAtlas to Express via mongoose
const connect = require("./config/db.js");
const appExpress = require("./index")

appExpress.listen(process.env.PORT || 5006,async()=>{
try {
   await connect()
console.log("Listening port number 5006") 
} catch (error) {
   console.log("ERROR",error) 
}
})
