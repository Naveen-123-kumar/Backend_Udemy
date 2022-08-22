let fs=require("fs")
// fs.writeFileSync('textFile.txt','Hi,This is Naveen');
let data=fs.readFileSync('textFile.txt','utf-8')
console.log(data)
