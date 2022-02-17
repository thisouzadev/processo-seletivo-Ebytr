require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const err = require('./middlewares/errorHandler');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const app = express();
const http = require('http').createServer(app);

app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(err);

http.listen(PORT, () => {
  console.log(`Servidor ouvindo na porta ${PORT}`);
});