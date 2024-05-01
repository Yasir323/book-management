const express = require('express');
const { getAllBooks, createBook } = require('../controllers/bookController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllBooks);
router.post('/', authMiddleware, createBook);

// Implement update and delete routes similarly

module.exports = router;
