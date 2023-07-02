const http=require('http');

const PORT=3020;
const hostName='localhost';
const server=http.createServer((req,res)=>{
    res.statusCode='200';
    res.setHeader('content-Type','Plain /text')
    res.end('Node server created by Rohit yadav');

});
server.listen(PORT,()=>{

    console.log(`server running at ${hostName}: ${PORT}`)
})
