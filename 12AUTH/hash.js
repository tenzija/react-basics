const bcrypt = require('bcrypt')

bcrypt.genSalt(10,(err,salt)=>{
    if(err){
        return false
    } else {
        bcrypt.hash('password123', salt, (err,hash)=>{
            if(err){
                return console.log(err)
            } else {
                console.log(hash)
            }
        })
    }
})