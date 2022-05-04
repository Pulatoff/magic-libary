function getAllBooks(req, res) {
  fs.readFile(`${__dirname}/dev-data/data/books.json`, 'utf-8', (er, data) => {
    res.status(200).json({
      status: 'success',
      data: {
        data,
      },
    });
  });
}

function addBook(req, res) {
  const data = req.body;
  const id = data.at(-1).id + 1;
  const comObj = Object.assign({ id: id }, data);
  data.push(comObj);
  fs.writeFileSync(
    `${__dirname}/dev-data/data/data.json`,
    JSON.stringify(data),
    'utf-8'
  );
  res.status(200).json({
    status: 'success',
  });
}

function getOneBook(req, res) {
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

function updateBook(req, res) {}

function deleteBook(req, res) {}

module.exports = { getAllBooks, addBook, getOneBook, updateBook, deleteBook };
