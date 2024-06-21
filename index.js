// This is the Initialization file

//importing express
const express = require('express');
const { writeFile } = require('./file_operation.js');

const port = process.env.PORT || 3000;

//creating express server application
const server = express();

// ROUTE injection
server.use("/read",require("./api_endpoint.js"))

// listening to the server via port
server.listen(port,()=>{
  console.log(process.env)
    console.log(`Starting the Server at http://localhost:${port} ...`)
})

// root URL
server.get("/",async (req,res,next)=>{
   res.json({
    success : true,
    message : `Successfully written ${file}`,
    available_Endpoints : ["/read","/read/date-time","/read/date-time1","/read/date-time2"]
   })
})

function stampFile(){
    // Get the current timestamp
    var timestamp = Date.now();
    var date = new Date()
    return `Date is ${date}\nCurrent timestamp : ${timestamp}`;
}
