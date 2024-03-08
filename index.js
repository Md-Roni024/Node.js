// const os = require('os')
// //hostName
// console.log(os.hostname())
// //homeDir
// console.log(os.homedir())
// //freeMem
// console.log(os.freemem())
// //totalMem
// console.log(os.totalmem())


const rootPath = (__dirname);
const filePath = (__filename);
console.log(rootPath)
console.log(filePath)


const path = require('path')
// console.log(path)
//Extension Name
extensionName = path.extname("index.js");
console.log(extensionName);

//Join
extJoin = path.join(__dirname + '/api/books')
console.log(extJoin)