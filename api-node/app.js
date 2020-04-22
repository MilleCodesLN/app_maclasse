const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require('morgan');
// const path = require('path');


const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// app.use('/images', express.static(path.join(__dirname, 'images')));
module.exports = app;