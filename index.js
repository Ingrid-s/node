/*const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});*/

/*const express = require("express");
const app = express();

const { config } = require("./config/index");

app.use(express.json());

app.get('/year/:year', (req, res) => {
  var year = req.params.year;
  if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    res.json({
      message: `El año ${year} es bisiesto`
    })
  } else {
    res.json({
      message: `El año ${year} no es bisiesto`
    })
  }
});

app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});*/

const express = require('express');
const cors = require ('cors');
const app = express();

const { config } = require('./config/index');
const  moviesApi = require('./routes/movies.js');

const {
  logErrors, 
  wrapErrors, 
  errorHandler
 } = require('./utils/middleware/errorHandlers.js');

 const notFoundHandler = require('./utils/middleware/notFoundHandler');


//Middleware Body Parser
app.use(express.json());

//routes
moviesApi(app);

//catch 404
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.use(cors())

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
})