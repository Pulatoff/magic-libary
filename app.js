const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const cors = require('cors');
const app = express();
const booksRouter = require('./router/booksRouter');
const usersRouter = require('./router/userRouter');

// ===== Datas =======

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/users.json`, 'utf-8')
);

// ===== Middleware ======

app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Acces-Control-Allow-Origin', '*');
  res.setHeader('Acces-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Acces-Contorl-Allow-Methods', 'Content-Type', 'Authorization');
  next();
});

app.use(morgan('dev'));

app.use('/api/v1/books', booksRouter);
app.use('/api/v1/users', usersRouter);

module.exports = app;

// ====== Routes ======

// ======= expamples dataObj ======= //

// const user = {
//   firstName: 'Niyozbek',
//   lastName: 'Pulatov',
//   dataBirth: '12.03.2004',
//   email: 'niyozbekpulatov@gmail.com',
//   parol: 'niyozbek2004.',
//   age: '18',
//   ip: '198.162.100.249',
//   enterDevice: [],
// };

// const book = {
//   nameBook: 'Qizil Qalpoqcha',
//   writeDate: '12.12.1987',
//   rate: 4.9,
//   price: 200,
//   description:
//     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida tellus non nisi vulputate, at consequat dui ullamcorper. Duis eleifend rutrum arcu a vestibulum. Mauris imperdiet, erat et efficitur varius, erat nibh maximus neque, non laoreet ante magna eu ante. Duis non metus porttitor, viverra nisl a, porta justo. Integer ligula risus, pulvinar sed pulvinar at, accumsan luctus turpis. Curabitur faucibus molestie felis, at maximus nunc gravida nec. Curabitur blandit purus enim, ornare ullamcorper elit aliquam vitae. Donec luctus, purus vitae egestas tincidunt, mauris nibh vulputate felis, vitae tincidunt justo nisi ut ante. Pellentesque lorem arcu, dictum vitae interdum sit amet, ultrices quis diam. Aliquam gravida tortor vitae sapien blandit finibus.',
// };

// if (idBook) {
//   const [obj] = books.filter((val) => val.id === idBook);
//   const index = books.findIndex((val) => val.id === idBook);
//   const changes = Object.entries(obj);
//   const datas = Object.entries(data);
//   console.log(datas);
//   for (let [key, val] of changes) {
//     for (let [key1, val1] of datas) {
//       if (key1 === key) {
//         obj.key1 = val1;
//       }
//     }
//   }
//   console.log(obj);
//   books[index] = obj;

//   fs.writeFileSync(
//     `${__dirname}/dev-data/data/books.json`,
//     JSON.stringify(books),
//     'utf-8'
//   );
//   res.status(200).json({
//     status: 'nma gap',
//   });
// }

// app.get('/api/v1/books', (req, res) => {});

// app.get('/api/v1/books/:id', (req, res) => {});

// app.post('/api/v1/users', (req, res) => {
//   const idBook = +req.params.id;
//   const data = req.body;
//   const id = users.at(-1).id + 1;
//   const comObj = Object.assign({ id: id }, data);
//   users.push(comObj);
//   fs.writeFileSync(
//     `${__dirname}/dev-data/data/users.json`,
//     JSON.stringify(users),
//     'utf-8'
//   );
//   res.status(201).json({
//     status: 'success',
//   });
// });

// app.get('/api/v1/users', (req, res) => {
//   fs.readFile(`${__dirname}/dev-data/data/users.json`, 'utf-8', (er, data) => {
//     let datas = JSON.parse(data);
//     res.status(200).json({
//       data: {
//         datas,
//       },
//     });
//   });
// });
