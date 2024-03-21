const express = require('express');
const app = express();
const cors=require('cors');
var bodyParser = require('body-parser');
const formRoute=require('./Routes/formRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use('/form',formRoute);

app.listen(5000,() => {
    console.log("Server running on port 5000");
});