const bookModel = require('../model/booksModel');

async function getAllBooks(req, res) {
  fs.readFile(`${__dirname}/dev-data/data/books.json`, 'utf-8', (er, data) => {
    res.status(200).json({
      status: 'success',
      data: {
        data,
      },
    });
  });
}

async function addBook(req, res) {
  const data = await bookModel.create(req.body);
  res.status(201).json({
    status: data,
  });
}

async function getOneBook(req, res) {
  const id = +req.params.id;

  fs.readFile(`${__dirname}/dev-data/data/books.json`, 'utf-8', (err, data) => {
    const arr = JSON.parse(data);
    const obj = arr.find((val) => val.id == id);
    res.status(200).json({
      status: 'success',
      data: {
        obj,
      },
    });
  });
}

async function updateBook(req, res) {}

async function deleteBook(req, res) {}

module.exports = { getAllBooks, addBook, getOneBook, updateBook, deleteBook };
