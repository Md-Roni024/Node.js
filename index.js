const fs = require('fs')

//write a file
fs.writeFile('demo1.txt','My Name is Roni',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Successful.')
    }
})

//Read a file
// fs.readFile('demo1.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

//Append a file
// fs.appendFile('demo1.txt',' I am 24 Years old.',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Successful.')
//     }
// })


//Rename File
// fs.rename('demo1.txt',' demo2.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log('Successful.')
//     }
// })


//Delete a file
fs.unlink(' demo2.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Successful.')
    }
})