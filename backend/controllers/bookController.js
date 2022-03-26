const asyncHandler = require('express-async-handler'); // englobe nos async

// async car Mongoose renvoie une promesse
// avec une promesse, on utilise normalement un bloc try/catch
// mais comme on veut utiliser notre fonction errorHandler (errorMiddleware.js), ici on utilise le package express-async-handler
const getBooks = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get books!!!' });
});

const createBook = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error('Please add a title field!'); // error handler de Express mais par defaut rendu au format html. Pour changer ce comportement : créer un middleware function (cf errorMiddleware.js) => renvoie un objet avec que le message. + le stack détaillé si NODE_ENV = development
  }
  res.status(200).json({ message: 'Create books!!!' });
});

const updateBook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update book id n° ${req.params.id}` });
});

const deleteBook = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete book id n° ${req.params.id}` });
});

module.exports = {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
};
