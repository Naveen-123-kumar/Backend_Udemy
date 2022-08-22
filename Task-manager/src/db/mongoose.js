const URI = process.env.MONGODB_URL;
const mongoose = require("mongoose");
// const validator = require("validator");
mongoose.connect(
  "mongodb://127.0.0.1:27017/Task-manager-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
//   const Task = mongoose.model('Task', {
//       description: {
//           type: String,
//           required: true,
//           trim: true
//       },
//       completed: {
//           type: Boolean,
//           default: false
//       }
//   })
//   ,
//   (err) => {
//     if (err) throw err;
//     console.log("Connected to MongoDB!!!");
//   }
// );
// const User = mongoose.model("User", {
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   email: {
//     type: String,
//     require: true,
//     trim: true,
//     lowercase: true,
//     validate(value) {
//       if (!validator.isEmail(value)) {
//         throw new Error("Email is Invalid");
//       }
//     },
//   },
//   age: {
//     type: Number,
//     default: 0,
//     validate(value) {
//       if (value < 0) {
//         throw new Error("Age must be positive");
//       }
//     },
//   },
// });
// const me = new User({
//     name: 'Naveen',
//     email:'naveen@gmail.com',
//     age: 25
// })
// me.save().then(() =>{
// console.log(me)
// }).catch((error) =>{
//     console.log('Error!',error)
// })
