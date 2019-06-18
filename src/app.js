const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()
const mongoose = require('mongoose')
const cors = require('cors')

// mongodb+srv://maik:<password>@cluster0-7qcgd.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://lucca:lucca@cluster0-7qcgd.mongodb.net/sonhos?retryWrites=true", {
  useNewUrlParser: true
});

// config para receber post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ credentials: true, origin: true }));

//Rotas
const index = require('./routes/index')
app.use('/', index)

const server = require('http').Server(app);
server.listen(process.env.PORT || 3333);

//module.exports = server// require('http').Server(app)
