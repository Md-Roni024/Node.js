const http = require('http')
const port =3000
const hostname = '127.0.0.1'
const fs = require('fs');

const myServer = http.createServer((req,res)=>{
    if(req.url === '/'){
        fs.readFile("index.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end();
        })
    }
    else if(req.url === '/about'){
        fs.readFile("about.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end();
        })
    }
    else if(req.url === '/contact'){
        fs.readFile("contact.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end();
        })
    }
})

myServer.listen(port,hostname,()=>{
    console.log(`Server is Runnning at http://${hostname}:${port}`)
})