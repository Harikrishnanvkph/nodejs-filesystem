// importing filesystem
const fs = require("node:fs/promises");

//function to write a file
async function writeFile(filepath = "",content = ""){
    await fs.writeFile(filepath,content,"utf-8");
}

//function to read a file
async function readFile(filepath=""){
    const data = await fs.readFile(filepath,"utf-8");
    return data;
}

//function to read files in folder
async function readFolderFiles(filepath = ""){
    const arrFile = await fs.readdir(filepath,"utf-8");
    let obj = [];
    for(let file of arrFile){
        const fileTxt = await readFile(`${filepath}/${file}`);
        const [name, extn] = file.split(".");
        obj.push({
            name : name,
            read_message : fileTxt
        });
    }
    return obj;
}


module.exports = {readFile,writeFile,readFolderFiles}