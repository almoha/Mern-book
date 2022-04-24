const express = require('express');
const router = express.Router();
const {
  getBooks,
  getDetailBook,
  createBook,
  updateBook,
  deleteBook,
} = require('../controllers/bookController');

router.get('/', getBooks);

router.get('/:id', getDetailBook);

router.post('/', createBook);

router.put('/:id', updateBook);

router.delete('/:id', deleteBook);

module.exports = router;
