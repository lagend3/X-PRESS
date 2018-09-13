const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const errorhandler = require('errorhandler');
const morgan = require('morgan');
const cors = require('cors');

const apiRouter = require('./api/api');
app.use('/api', apiRouter);


const PORT = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(errorhandler());

app.listen(PORT, ()=> {
  console.log(`Server listening on port ${PORT} `)
});

module.exports = app;
