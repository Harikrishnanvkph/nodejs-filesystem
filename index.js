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
    console.log(`Starting the Server at http://localhost:${port} ...`)
})

// root URL
server.get("/",async (req,res,next)=>{
   res.json({
    success : true,
    message : `Welcome to Node JS Task 1 `,
    available_Endpoints : ["/write","/read","/read/:fileName"]
   })
})

server.get("/write",async (req,res,next)=>{
  console.log("got in")
  const date = new Date();
  const currentDateTime = date.toTimeString().split(" GMT+0530 (India Standard Time)")[0].split(":");
  const [h,m,s] = currentDateTime;
  const time = `${h}hrs_${m}min_${s}sec`;
  await writeFile(`./date_stamp_files/${date.toDateString()} ${time}.txt`, await stampFile());
  res.json(`Done written a file with current timestamp ${date} and with file name as "${date.toDateString()} ${time}.txt"`)
})

async function stampFile(){
   // Get the current timestamp
   var timestamp = Date.now();
   var date = new Date()
   return `Date is ${date}\nCurrent timestamp : ${timestamp}`;
}

