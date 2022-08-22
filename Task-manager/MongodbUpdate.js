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

//     //Update one
//     const updatePromise = db.collection("users").updateOne(
//       {
//         _id: new ObjectId("623409bade57531a973e2380"),
//       },
//       {
//         $inc: {
//           GradeStart: 1,
//         },
//       },
//       {
//         $set: {
//           Companyname: "Avinash",
//         },
//       }
//     );
//     updatePromise
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// );
