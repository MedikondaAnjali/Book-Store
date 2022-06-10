const asyncHandler = require('express-async-handler')
//const { find } = require('../models/bookModel')

const Book = require('../models/bookModel')

// @desc   Get books
//@route   Get /api/books
//access   Private
const getBooks = asyncHandler(async (req, res) => {
    const books = await Book.find()

    res.status(200).json(books)
})

// @desc   Set book
//@route   POST /api/books
//access   Private

const setBook = asyncHandler(async (req, res) => {
    if(! req.body.title){
        res.status(400)
        throw new Error('Please add a title')
    }
    if(! req.body.author){
        res.status(400)
        throw new Error('Please add a author')
    }
    if(! req.body.price){
        res.status(400)
        throw new Error('Please add a price')
    }
    
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price

    })
    res.status(200).json(book)

})
      
// @desc   Update books
//@route   PUT /api/books/:id
//access   Private
const updateBook = asyncHandler(async(req, res) => {
    const book = await Book.findById(req.params.id)

    if(!book) {
        res.status(400)
        throw new Error('Book not found')
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedBook)
})


// @desc   Delete book
//@route   DELETE /api/books/:id
//access   Private
const deleteBook = asyncHandler(async (req, res) => {

    const book = await Book .findById(req.params.id)

    if(!book) {
        res.status(400)
        throw new Error('Book not found')
    }

    await book.remove()

    res .status(200).json({ id: req.params.id })
})


module.exports = {
    getBooks,
    setBook,
    updateBook,
    deleteBook
}