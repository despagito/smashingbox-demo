/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const app = express();

const winesRouter = express.Router();

const data = require('./wines.json');

winesRouter.get('/wines', function(req, res) {
    res.send(data);
});

app.use('/api/v1', winesRouter);

app.listen(3000, function() {
    console.log('App listening on port 3000');
});
