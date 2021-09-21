const express = require('express');
const pageRoute = require('./routes/pageRoute');

const app = express();

// TEMPLATE ENGINE
app.set('view engine','ejs')

// MIDDLEWARES
app.use(express.static('public'));

// ROUTES
app.use('/', pageRoute);


const port = 3000;
app.listen(port, () => {
  console.log(`App Started on port ${port}`);
});
