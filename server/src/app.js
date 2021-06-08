const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        // message: `Hello ${req.body.username}! You are successfully registered!`
        message: req.body
    });
});

app.post('/login', (req, res) => {
    res.send({
        message: `Welcome back ${req.body.userName}!`
    });
});


app.listen(process.env.PORT || 8081);
