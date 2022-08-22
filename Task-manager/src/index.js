const path=require('path');
const express=require('express');

// require('./db/mongoose')
// const User = require('./models/user')
// const Task=require('./models/task')
const app = express();
const publicDirPath=path.join(__dirname,'../public');
app.set('view engine','hbs')

app.use(express.static(publicDirPath));
app.get('',(req, res)=>{
    res.render('index',{
        title:'Index page',
        name:'Naveen'
    })
})
app.get('/about',(req, res)=>{
    res.render('about',{
        title:'About page',
        name:'Naveen'
    })
})
app.get('/help',(req, res)=>{
    res.render('help',{
        title:'help page',
        name:'Naveen'
    })
})


// console.log(__dirname)

// console.log(path.join(__dirname,'../public'))

// const port = process.env.PORT || 3000
// app.get('',(req, res)=>{
//     res.send('Hello express!')
// })
// app.get('/help',(req, res)=>{
//     res.send('Home Page!')
// })
// app.get('/htmloage',(req, res)=>{
//     res.send('<h1>Html Page</h1>')
// })
// app.get('/jsondata',(req, res)=>{
//     res.send([{
//         name:'Naveen'},
//         {
//         age:20
//     }
// ])
// })
app.listen(4000, () => {
    console.log("Server is running on port number 4000")
})
// app.use(express.json())
// app.post('/users', (req, res)=>{
//     // console.log(req.body)
//     // res.send('Testing!')
//     const user =new User(req.body)
//     user.save().then(() =>{
//         res.status(201).send(user)
//     }).catch((e) =>{
//         res.status(400).send(e)
//         res.send(e)
//     })
// })
// app.get('/users', (req, res)=>{
//     User.find({ }).then((users) =>{
//         res.status(201).send(users)
//     }).catch((e) =>{
//         res.status(500).send(e)
//         res.send(e)
//     })
// })
// app.get('/users/:id', (req, res)=>{
//     const _id=req.params.id
//     User.findById(_id).then((user)=>{
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch((e)=>{
//         res.status(500).send()
//     })
// })

// app.delete('/users/:id', async(req, res)=>{
//     const updates= Object.keys(req.body)
//     const allowedUpdates =['name','email','passward','age']
//     const isValidOperation=updates.every((update) => allowedUpdates.includes(update))
// if(!isValidOperation) {
//     return res.status(404).send({error: 'Invalid Operation'})
// }

//     try {
// const user = await User.findByIdAndDelete(req.params.id)
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch(e) {
//         res.status(500).send()
//     }
// })


// app.patch('/users/:id', async(req, res)=>{
//     const updates= Object.keys(req.body)
//     const allowedUpdates =['name','email','passward','age']
//     const isValidOperation=updates.every((update) => allowedUpdates.includes(update))
// if(!isValidOperation) {
//     return res.status(404).send({error: 'Invalid Operation'})
// }

//     try {
// const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch(e) {
//         res.status(500).send()
//     }
// })

// app.post('/tasks', (req, res)=>{
//     // console.log(req.body)
//     // res.send('Testing!')
//     const task =new Task(req.body)
//     task.save().then(() =>{
//         res.status(201).send(task)
//     }).catch((e) =>{
//         res.status(400).send(e)
//         res.send(e)


//     })
// })
// app.listen(port, () => {
//     console.log('Server is up on port' + port)
// })