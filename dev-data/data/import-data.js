const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE;
const Book = require('../../model/booksModel');

const data = JSON.parse(fs.readFileSync(`${__dirname}/books.json`, 'utf-8'));

async function dataRun() {
  try {
    const dataBit = await Book.create(data);
  } catch (e) {
    console.log('hatto Databasega qushilmadi');
  }
}

mongoose.connect(
  DB,
  () => {
    console.log('conected to DataBase');
  },
  (e) => {
    console.log(e);
  }
);

async function deleteFunct() {
  try {
    const deleteD = await Book.deleteMany();
    console.log('hamma malumot uchirildi');
  } catch (e) {
    console.log(e);
  }
}

if (process.argv[2] === '--add') {
  dataRun();
} else if (process.argv[2] === '--remove') {
  deleteFunct();
}
console.log(process.argv);
