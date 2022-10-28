const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI
    },
    default:{
        SECRET:'supersecretpassword',
        DATABASE:'mongodb+srv://tenzija:tenzija@cluster0.muzjx0o.mongodb.net/authApp?retryWrites=true&w=majority'
    }
}

exports.get = function get(env){
    return config[env] || config.default
}