const mongoose = require('mongoose')

const bookSchema = mongoose.Schema({

    title: String,
    author: String,
    price: String,
    //isbn: String
   
   
})

module.exports = mongoose.model('Book', bookSchema)