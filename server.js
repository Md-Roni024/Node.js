const http = require('http')
const port =3000
const hostname = '127.0.0.1'

//Create Server
const myServer = http.createServer((req,res)=>{
    res.end('Hello I am Your First Server.')
})

myServer.listen(port,()=>{
    console.log(`Server is Runnning at http://${hostname}:${port}`)
})