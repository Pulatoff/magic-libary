const bookModel = require('../model/booksModel');

async function getAllBooks(req, res) {
  try {
    const data = await bookModel.find();
    res.status(200).json({
      status: 'success',
      data: data,
    });
  } catch (e) {
    res.status(404).json({
      status: 'failed',
      data: 'invalid request',
    });
  }
}

async function addBook(req, res) {
  try {
    const data = await bookModel.create(req.body);
    res.status(201).json({
      status: data,
    });
  } catch (e) {
    res.status(404).json({
      status: 'failed',
      data: 'invalid request',
    });
  }
}

async function getOneBook(req, res) {
  try {
    const data = await bookModel.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: data,
    });
  } catch (e) {
    res.status(404).json({
      status: 'failed',
      data: 'invalid request',
    });
  }
}

async function updateBook(req, res) {
  try {
    const data = await bookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'success',
      data: data,
    });
  } catch (e) {
    res.status(404).json({
      status: 'failed',
      data: 'invalid request',
    });
  }
}

async function deleteBook(req, res) {
  try {
    const data = await bookModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (e) {
    res.status(404).json({
      status: 'failed',
      data: 'invalid request',
    });
  }
}

module.exports = { getAllBooks, addBook, getOneBook, updateBook, deleteBook };
