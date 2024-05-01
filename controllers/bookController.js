const Book = require('../models/Book');

exports.getAllBooks = async (req, res) => {
  try {
    const { author, publicationYear } = req.query;
    let query = {};
    if (author) query.author = author;
    if (publicationYear) query.publicationYear = publicationYear;
    const books = await Book.find(query);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBook = async (req, res) => {
  try {
    const { title, author, publicationYear } = req.body;
    const newBook = new Book({ title, author, publicationYear });
    await newBook.save();
    res.status(201).json({ message: 'Book created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// TODO: Implement updateBook and deleteBook controllers similarly
