// //CRUD Operation

// // const mongodb = require('mongodb')
// // const MongoClient= mongodb.MongoClient
// // const ObjectID= mongodb.ObjectId;
// const { MongoClient, ObjectId } = require("mongodb");

// // const id=new ObjectId()
// // console.log(id)
// // console.log(id.getTimestamp())
// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "Task-manager";
// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connect databases");
//     }
//     const db = client.db(databaseName);

//     //Find One

//     db.collection("users").findOne(
//       { name: "Naveen", age: 20 },
//       (error, user) => {
//         if (error) {
//           return console.log("Unable to fetch");
//         }
//         console.log(user);
//       }
//     );

//     // For Many
//     db.collection("users")
//       .find({ name: "Naveen" })
//       .toArray((error, user) => {
//         if (error) {
//           return console.log("Unable to fetch");
//         }
//         console.log(user);
//       });
//     db.collection("users")
//       .find({ name: "Naveen" })
//       .count((error, count) => {
//         console.log(count);
//       });
//   }
// );
