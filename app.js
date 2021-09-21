const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const couseRouter = require('./routes/courseRoute');

const app = express();

// DB Connection
mongoose
  .connect('mongodb://localhost/smartEdu-test-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModiy: true,
    useCreateIndex: true,
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

// ROUTES
app.use('/', pageRoute);
app.use('/courses',couseRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`App Started on port ${port}`);
});
