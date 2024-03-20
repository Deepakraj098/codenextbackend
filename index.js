const express = require('express');
const database = require('./databaseConnection');
const app = express();
const cors=require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.listen(5000,() => {
    console.log("Server running on port 5000");
});