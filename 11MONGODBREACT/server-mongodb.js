const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

// mongodb+srv://tenzija:<password>@cluster0.muzjx0o.mongodb.net/?retryWrites=true&w=majority

const mongoUri = 'mongodb+srv://tenzija:tenzija@cluster0.muzjx0o.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(mongoUri)

app.get('/api/users', async(req,res)=>{
    try {
        await client.connect()
        const database = client.db('myApp')
        const collection = database.collection('users')
        const query = await collection.insertOne(
            {
                name: 'Slobodan',
                lastname: 'Milosevic'
            }
        )

        console.log(query)

        res.status(200).json({ratniZlocin:'DA!'})

    } catch(error) {
        throw error
    } finally {
        await client.close()
        console.log('all is done')
    }
})

///CHECK IF YOU ARE CONNECTING
MongoClient.connect(mongoUri,{ useUnifiedTopology: true } ,(err,client)=>{
    if(err){
        throw err
    } else {
        console.log('connected to the db ')
    }
})

const port = process.env.PORT || 3001

app.listen(port)