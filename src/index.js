const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 

// Middleware function 
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disables')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//         res.status(500).send('Service is unter maintenance')
// })

// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('Please upload a Word document'))
//         }

//         cb(undefined, true)
        
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send({success: 'File Uploaded'})
// }, (error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

// Automatically parse json to an object
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

//const Task = require('./models/task')

// const main = async () => {
//     // const task = await Task.findById('5f3d9637a2700930709e92ae')
//     // await task.populate('owner').execPopulate()// we bring the entire profile of owner
//     // console.log(task.owner)

//     const user = await User.findById('5f3d9115aa7c2034b0cee055')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()