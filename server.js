const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Iniciando app
const app = express();
app.use(express.json());
//Inidicando o DB
mongoose.connect('mongodb://localhost:27012/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);