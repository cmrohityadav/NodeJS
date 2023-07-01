const fs=require("fs");
const { buffer } = require("stream/consumers");
console.log("read start");

//asynchronous way to read file
// fs.readFile('input.txt',function(err, data){
//     if(err){
//         console.log('erro:',err)
//         return err;
//     }
//     console.log('data',data.toString());
//     console.log('read end ');
//     return data;
// });
// console.log('other stuff');


//synchronous way to read file
//  var data=fs.readFileSync('input.txt');
//  console.log('data',data.toString());
//  console.log('Read end');
//  console.log('other stuff');





 //read > open +read
// const buf=new Buffer(1024);
//  fs.open('input.txt','r+',function(err,fd){
//     if(err){
//         console.log('error in opening file',err);

//     }
//     console.log("file open sucessfull");

//     fs.read(fd, buf,0,buf.length, 2,function(er, bytes){

//         if(er){
//             console.log('error in reading file')

//         }
//         console.log('data', bytes);
//         console.log('data', bytes);
//         console.log('Data',buf.slice(0,bytes).toString());

//     })




//writing to file
// fs.writeFile('./input.txt','CmrohityadavJi',function(err){
//     if(err){
//         console.log('error in writing file')

//     }else{
//         console.log('success in writing file')
//     }
// });


//append to file
// fs.appendFile('input.txt','Rohit Bhaai','utf8',function(err){
//     if(err){
//         console.log('error in appending file')

//     }else{
//         console.log('success in appending file')
//     }

// })


//deleting file
fs.unlink('input.txt',function(err){
    if (err){
        console.log('error in deleting file')
    }else{
        console.log('sucess in delting file')
    }
});
