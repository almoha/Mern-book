const asyncHandler = require('express-async-handler'); // englobe nos async

const Book = require('../models/BookModel');

// async car Mongoose renvoie une promesse
// avec une promesse, on utilise normalement un bloc try/catch
// mais comme on veut utiliser notre fonction errorHandler (errorMiddleware.js), ici on utilise le package express-async-handler
const getBooks = asyncHandler(async (req, res) => {
  const books = await Book.find({});

  res.status(200).json(books);
});

const createBook = asyncHandler(async (req, res) => {
  console.log('backend bookController req body create: ', req.body);
  if (!req.body.title) {
    res.status(400);
    throw new Error('Please add a title field!'); // error handler de Express mais par defaut rendu au format html. Pour changer ce comportement : créer un middleware function (cf errorMiddleware.js) => renvoie un objet avec que le message. + le stack détaillé si NODE_ENV = development
  }

  const book = await Book.create({
    // alternative plus courte que book = new Book({}); book.save
    title: req.body.title,
    description: req.body.description,
    author: req.body.author,
  });

  res.status(200).json(book);
});

const updateBook = asyncHandler(async (req, res) => {
  console.log('backend bookController req body: ', req.body);
  const book = await Book.findById(req.params.id);
  console.log('original book : ', book);
  if (!book) {
    res.status(400);
    throw new Error('Book not found');
  }
  // const livre = {
  //   title: 'la rage3',
  //   description: 'desc la rage3',
  //   author: 'sauvage jason3',
  // };
  //findByIdAndUpdate(id, ...) is equivalent to findOneAndUpdate({ _id: id }, ...). So, really, findByIdAndUpdate() is just a convenient shorthand version for an update scenario that is likely to happen very often ("update by id")
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    // test avec {title: 'zorro}=> l'update se fait
    new: true,
  });

  console.log('updated book : ', updatedBook);
  res.status(200).json(updatedBook);
});

const deleteBook = asyncHandler(async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    res.status(400);
    throw new Error('Book not found');
  }

  await book.deleteOne({ _id: req.params.id }); // fonction remove() dépréciée

  res.status(200).json({ id: req.params.id }); // renvoie l'id, utile pour le frontend
});

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
