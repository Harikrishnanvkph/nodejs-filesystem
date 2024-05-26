// importing function from ./file_operation file
const { readFolderFiles } = require("./file_operation");

// creating Router
const route = require("express").Router();

// EndPoint = "/"
route.get("/",async (req,res,next)=>{
    res.json(await readFolderFiles("./date_stamp_files"))
})

// EndPoint = "/:name"
route.get("/:name",async (req,res,next)=>{
   const { name } =  req.params;
   const tree = await readFolderFiles("./date_stamp_files");
   const tip = tree.find((it) => it.name == name);
   console.log(tip)
   res.json( tip == undefined ? {
    message : "NO SUCH ENDPOINT FOUND"
   } : tip)
})


module.exports = route;