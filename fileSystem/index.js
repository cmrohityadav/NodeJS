const fs=require("fs");
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
 var data=fs.readFileSync('input.txt');
 console.log('data',data.toString());
 console.log('Read end');
 console.log('other stuff');