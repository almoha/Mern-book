const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title value'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description value'],
    },
    author: {
      type: String,
      required: [true, 'Please add a author value'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Book', bookSchema); // automatiquement mongoDB prend le nom du model en le transformant : minuscule et au pluriel => books
