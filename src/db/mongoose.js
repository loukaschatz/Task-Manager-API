const mongoose = require('mongoose')

// Connection with database
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// const me = new User({
//     name: '   Loukas   ',
//     email: 'MYEMAIL@MEAD.IO',
//     password: 'Password123   '
// })

// // To save to the database
// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })

// const task = new Task({
//     description: '   Eat lunch'
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//    console.log('Error!', error) 
// })
