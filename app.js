const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRouter = require('./routes/courseRoute');
const categoryRouter = require('./routes/categoryRoute');

const app = express();

// DB Connection
mongoose
  .connect('mongodb://localhost/smartEdu-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Db Connected Succesfully');
  })
  .catch((err) => {
    console.log(err);
  });

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// ROUTES
app.use('/', pageRoute);
app.use('/courses',courseRouter);
app.use('/category',categoryRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App Started on port ${port}`);
});
