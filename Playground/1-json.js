const fs=require('fs')
// const book={
//     title:'Ego is the Enamy',
//     author: 'Riyan Holiday'
// }
// const bookJSON  = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
// console.log(bookJSON);
// const parseData=JSON.parse(bookJSON)
// console.log(parseData.author)



// In this section we have read the data from Json file and print in the our terminal.

// const dataBuffer=fs.readFileSync('1-json.json')
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)
 // In the below process we are going to edit data that has been stored in the json file 
 const dataBuffer=fs.readFileSync('1-json.json')
 const dataJSON = dataBuffer.toString()
 const user = JSON.parse(dataJSON)
 user.name='Naveen'
 user.age=53
 const userJSON= JSON.stringify(user)
 fs.writeFileSync('1-json.json',userJSON)