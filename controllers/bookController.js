const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  try {
    const { id, author, publicationYear } = req.query;
    let query = {};
    if (id) {
      query._id = id;
    } else {
      if (author) query.author = author;
      if (publicationYear) query.publicationYear = publicationYear;
    }
    const books = await Book.find(query);
    if (!books) res.status(404).json({ error: "Book not found" });
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

exports.editBook = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, author, publicationYear } = req.body;
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    // Update the properties of the document
    if (title) book.title = title;
    if (author) book.author = author;
    if (publicationYear) book.publicationYear = publicationYear;    

    // Save the updated document
    const updatedDoc = await book.save();
    console.log("Document updated successfully:", updatedDoc);
    res.status(200).json({ message: 'Book updated successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedDoc = await Book.findByIdAndDelete(id);
    if (!deletedDoc) res.status(404).json({ message: 'Book Not found' });
    res.status(200).json({ message: 'Book deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
