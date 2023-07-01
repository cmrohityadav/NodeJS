const os=require("os");
console.log('CPU Architecture: '+os.arch());

console.log("free memory: "+os.freemem());

console.log("total memory: " + os.totalmem());

console.log("network interfaces: "+ JSON.stringify(os.networkInterfaces()));

console.log("os default temp dir: "+os.tmpdir());

console.log("endianess: "+ os.endianness())

console.log("hostname : "+ os.hostname())

console.log("os type: "+ os.type());

console.log("platform: "+os.platform());

console.log("realise : "+os.release());

