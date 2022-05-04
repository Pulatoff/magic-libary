const express = require('express');
const booksRouter = express.Router();
const booksController = require('../controller/booksController');
const fs = require('fs');

const books = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/books.json`, 'utf-8')
);

booksRouter
  .route('/')
  .get(booksController.getAllBooks)
  .post(booksController.addBook);
booksRouter
  .route('/:id')
  .get(booksController.getOneBook)
  .patch(booksController.updateBook)
  .delete(booksController.deleteBook);

module.exports = booksRouter;
