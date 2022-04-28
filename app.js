const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/api/v1/books', (req, res) => {
  res.status(200).json({
    data: {
      name: 'Niyozbek',
    },
  });
});

const port = 5500;
app.listen(port, '127.0.0.1');

const user = {
  firstName: 'Niyozbek',
  lastName: 'Pulatov',
  dataBirth: '12.03.2004',
  email: 'niyozbekpulatov@gmail.com',
  parol: 'niyozbek2004.',
  age: '18',
  ip: '198.162.100.249',
  enterDevice: [],
};

const book = {
  nameBook: 'Qizil Qalpoqcha',
  writeDate: '12.12.1987',
  rate: 4.9,
  price: 200,
};

function ishla() {
  const id = 0;
  const objComplete = Object.assign({ id: id }, user);
  id++;
}
