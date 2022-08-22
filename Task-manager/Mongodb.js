// //CRUD Operation
// // /Program Files/MongoDb/bin/mongod.exe --dbpath=/Program Files/mongodb-data
// // const mongodb = require('mongodb')
// // const MongoClient= mongodb.MongoClient
// // const ObjectID= mongodb.ObjectId;
// const {MongoClient, ObjectId}=require('mongodb')

// // const id=new ObjectId()
// // console.log(id)
// // console.log(id.getTimestamp())
// const connectionURL='mongodb://127.0.0.1:27017'
// const databaseName ='Task-manager'
// MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) =>
// {
//     if(error) {
//          return console.log('Unable to connect databases');
//     }
//     const db=client.db(databaseName)


// //Update one
// // const updatePromise=db.collection('users').updateOne({
// //     _id: new ObjectId("6235413dfe45866171aeebcc")
// // },
// // {
// //     $inc:{
// //         age: 1
// //     }
// // },
// // {
// //     $set:{
// //         name: 'Avinash'
// //     }
// // })
// // updatePromise.then((result)=>{
// //     console.log(result)
// // }).catch((error) => {
// // console.log(error)
// // })

// //DeleteOnebyoen
// db.collection('tasks').deleteOne({
//     Subject: 'Coding'
// }).then((result)=>{
//     console.log(result)
// }).catch((error)=>
// {
//     console.log(error)
// })

// //DeleteMany
// // db.collection('users').deleteMany({
// //     age:20
// // }).then((result)=>{
// //     console.log(result)
// // }).catch((error)=>
// // {
// //     console.log(error)
// // })



// //Find One

//     // db.collection('users').findOne({ name: 'Naveen',age:20},(error,user)=>{
//     //     if(error){
//     //         return console.log('Unable to fetch')
//     //     }
//     //     console.log(user)
//     // })


//     //For Many
//     // db.collection('users').find({ name: 'Naveen'}).toArray((error,user)=>{
//     //     if(error){
//     //         return console.log('Unable to fetch')
//     //     }
//     //     console.log(user)
//     // })
//     // db.collection('users').find({ name: 'Naveen'}).count((error,count)=>{
      
//     //     console.log(count)
//     // })
//     // db.collection('users').insertOne(
//     //     {
//     //         _id: id,
//     //     name:'Naveen Singh',
//     //     age: 20,
//     //     Stream:'CSE',
//     //     CollegeName:'IIIT'
//     //     },(error, result) => {
//     //         if(error){
//     //             return console.log('Unable to insert user')
//     //         }
//     //         console.log(result.ops)
//     //     })
//     // db.collection('users').insertMany([

//     //     {
//     //     Companyname:'Codingal',
//     //     Title: 'Coding Teacher',
//     //     Subject:'Coding',
//     //     GradeStart: 1,
//     //     GradeEnd: 8,
//     //     JobLocation:'Work from home'
//     //     },
//     //     {
//     //         Companyname:'PlanetSpark',
//     //         Title: 'English Teacher',
//     //         Subject:'English',
//     //         GradeStart: 1,
//     //         GradeEnd: 8,
//     //         JobLocation:'Work from home'
//     //         },
//     //         {
//     //             Companyname:'Freadom',
//     //             Title: 'English Teacher',
//     //             Subject:'English',
//     //             GradeStart: 1,
//     //             GradeEnd: 8,
//     //             JobLocation:'Work from home'
//     //             }
//     // ],

//     //     (error, result) => {
//     //         if(error){
//     //             return console.log('Unable to insert user')
//     //         }
//     //         console.log(result.ops)
//     //     })
// })