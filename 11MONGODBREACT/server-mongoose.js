const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const mongoUri = 'mongodb+srv://tenzija:tenzija@cluster0.muzjx0o.mongodb.net/awesomeApp?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

///////////////////////////////////////////////

const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    availability: Boolean
})

const Car = mongoose.model('Car', carSchema)

///////////////////////////////////////////////

app.post('/api/addcar', (req,res)=>{
    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        availability: req.body.availability
    })
    
    addCar.save((err,doc)=>{
        if(err){
            return console.log(err)
        } else {
            return res.status(200).json(doc)
        }
    })
})

app.get('/api/getcars',(req,res) => {
    Car.find({},(err,doc)=>{
        if(err){
            return console.log(err)
        } else {
            return res.json(doc)
        }
    })
})

app.post('/api/removeCar',(req,res)=>{
    const brand = req.body.brand
    Car.remove({}, (err,doc)=>{
        if(err){
            return console.log(err)
        } else {
            return res.json(doc)
        }
    })
})

app.post('/api/updateCar',(req,res)=>{
    const id = req.body.id
    const brand = req.body.brand

    Car.findById(id,(err,car)=>{
        if(err){
            return console.log(err)
        } else {
            car.set({
                brand:brand
            })
            car.save((err,doc)=>{
                if(err){
                    return console.log(err)
                } else {
                    return res.json(doc)
                }
            })
        }
    })

    // Car.findByIdAndUpdate(id,{ $set:{ brand:brand } },{new:true},(err,doc)=>{
    //     if(err){
    //         return console.log(err)
    //     } else {
    //         console.log(doc)
    //         return res.json(doc)
    //     }
    // })
})

const port = process.env.PORT || 3001
app.listen(port)