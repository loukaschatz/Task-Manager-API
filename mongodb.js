// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)

MongoClient.connect(process.env.MONGODB_URL_2, { useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name : 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'excercise',
    //         completed: true
    //     }, {
    //         description: 'clean room',
    //         completed: false
    //     }, {
    //         description: 'make the bed',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5f31ae3dd9998933c83c7641") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     console.log(count)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectID("5f31aa8c7b47d24b207bd163")}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })
    
    // db.collection('tasks').find({ completed: false }).toArray( (error, task) => {
    //     console.log(task)
    // })

    // Using Promise
//     db.collection('users').updateOne( { _id: new ObjectID("5f31a7bcbfc4ad50ac33fcaf") 
//     }, {
//         // $set: {
//         //     name: 'Mike'
//         // }
//         $inc: {
//             age: 1 //increment age by 1 else -1 to decrement
//         }
//     }).then((result) => {
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })

    // db.collection('tasks').updateMany({ 
    //     completed: false  
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //         console.log(result)
    //     }).catch((error) => {
    //         console.log(error)
    // })

    // db.collection('tasks').deleteOne({
    //     description: 'excercise'
    // }).then((result) => {
    //     console.log(result.deletedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
})


