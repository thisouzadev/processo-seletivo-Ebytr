const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const err = require('./middlewares/errorHandler');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(err);

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});