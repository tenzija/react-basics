const { User } = require('../models/user')


let authenticate = (req,res,next) => {
    let token = req.cookies.x_auth

    User.findByToken(token,(err,user)=>{
        if(err) throw err
        if(!user) return res.status(401).send({message:'Bad token'})

        req.email = user.email
        req.token = token

        next()
    })
}

module.exports={ authenticate }