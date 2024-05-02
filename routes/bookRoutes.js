const express = require('express');
const { getBooks, createBook, editBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', getBooks);
router.post('/', authMiddleware, createBook);
router.put('/', authMiddleware, editBook);
router.delete('/', authMiddleware, deleteBook);

module.exports = router;
