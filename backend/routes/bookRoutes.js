const express = require('express')
const router = express.Router()
const { getBooks, setBook, updateBook, deleteBook } = require('../controllers/bookcontroller')


router.route('/').get(getBooks).post(setBook)

router.route('/:id').put(updateBook).delete(deleteBook)

module.exports = router
