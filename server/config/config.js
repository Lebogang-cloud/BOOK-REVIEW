const config = {
    production:{
        SECRET: process.env.SECRET,
        DATABASE: process.env.MONGODB_URI

    },
    default:{
        SECRET: 'SUPERSECRETPASSWORD1447',
        DATABASE: 'mongodb://localhost:27017/booksReview'

    }
}


exports.get = function get(env){
    return config[env] || config.default
}