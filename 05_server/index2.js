const http=require('http');

const PORT=2023;
const hostName='localhost';
const server=http.createServer((req,res)=>{




    //home page




    //about page



    //contact page

    //product




    //rest ...erro

    if(req.url=='/'){
        res.statusCode='200';
        res.setHeader('content-Type','text/plain')
        res.end("Welcome to NodeJs Server by Rohit");

    }else if(req.url=='/about'){
        res.statusCode='200';
        res.setHeader('content-Type','text/plain')
        res.end("About Page");


    }else if(req.url=='/contact'){
        res.statusCode='200';
        res.setHeader('content-Type','text/plain')
        res.end("contact Page");

        
    }else if(req.url=='/product'){
        const options={
            hostname:'fakestoreapi.com',
            path:'/products/1',
            method:'GET'
        }
        
        const apiReq=http.request(options,(apiRes)=>{
            apiRes.on("data",(data)=>{
                res.statusCode="200";
                res.setHeader('content-Type','application/json')

                res.end(data.toString())
            })
        })
        apiReq.on("erro",()=>{
            console.log(e)
        })
        
        apiReq.end();
        
    }else{
        res.statusCode='500';
        res.setHeader('content-Type','text/plain')
        res.end("Server Error");
    }






   
});
server.listen(PORT,()=>{

    console.log(`server running at ${hostName}: ${PORT}`)
})
