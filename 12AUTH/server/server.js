const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/config').get(process.env.NODE_ENV)
const cookieParser = require('cookie-parser')
//const bcrypt = require('bcrypt')
const app = express()


const mongoUri = config.DATABASE
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.set('useCreateIndex', true)

/// MIDDLEWARE
app.use(bodyParser.json())
app.use(cookieParser())
const { authenticate } = require('./middleware/auth')

/// MODELS
const { User } = require('./models/user')

/// ROUTES 
app.post('/api/user', (req,res)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })

    user.save((err,doc)=>{
        if(err){
            return res.status(400).send(err)
        } else {
            return res.status(200).send(doc)
        }
    })
})

app.post('/api/user/login',(req,res)=>{
    // 1 - find the user, if good ->
    User.findOne({'email': req.body.email},(err,user)=>{
        if(!user) {
            res.json({message:'User not found'})
        }

        // 2 - compare the string with the hash ->
        /// METHOD 1 - non-modular
        // bcrypt.compare(req.body.password, user.password,(err, isMatch)=>{
        //     if(err){
        //         res.json({message:'Password incorrect'})
        //     } else {
        //         res.status(200).send(isMatch)
        //     }
        // })
        /// METHOD 2 - modular
        user.comparePassword(req.body.password,(err,isMatch)=>{
            if(err) throw err
            if(!isMatch) return res.status(400).json({
                message:'Password incorrect'
            })
            // 3 - send response
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err)
                res.cookie('x_auth', user.token).send('Correct password')
            })
            
            //res.status(200).send(isMatch)
        })
    })
})



app.get('/api/books',authenticate,(req,res)=>{

    res.status(200).send(req.email)
    // let token = req.cookies.x_auth

    // User.findByToken(token,(err,user)=>{
    //     if(err) throw err
    //     if(!user) return res.status(401).send({message:'Bad token'})
    //     res.status(200).send(user)
    // })
})

const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Started on port ${port}`)
})