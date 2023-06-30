const path=require("path");
console.log(path.sep);
// console.log(process.env.path);
console.log(path.delimiter);

const filePath1='/public_html/home/index.html';
const currentFilePath=__filename; //filepath
console.log(currentFilePath);
//directory
console.log(__dirname);

let baseName=path.basename(currentFilePath);
console.log("basename ->",baseName);

let basenameWithoutExt=path.basename(currentFilePath,'.js')
console.log("base name without ext ->",basenameWithoutExt);

let dirnname=path.dirname(currentFilePath);
console.log(" dirname->",dirnname)

console.log("extension ->",path.extname(currentFilePath));
console.log("extension2 ->",path.extname("index.pdf.js.md.doc"));

let pathToFile=path.format({
    dir:'/public_html/home',
    base:'index.css'
});
console.log("path to file  ->", pathToFile);
 
// jo bhi file root se start ho wo absolute hai
//jo
console.log("is absolute -> ",path.isAbsolute(currentFilePath));
console.log("is absolute -> ",path.isAbsolute('/index.js'));
console.log("is absolute -> ",path.isAbsolute('./index.js'));
console.log("is absolute -> ",path.isAbsolute('../index.js'));

let pathTODir=path.join('/home','js','rohit/wedd','dist','index.js');
console.log('path to dir ->',pathTODir);

console.log("parse -> ",path.parse(currentFilePath));

console.log("relative path -> ",path.relative("/home/user/cong","/user/cmrohit/index.js"));

console.log("resolve ->", path.resolve());
console.log(first)




