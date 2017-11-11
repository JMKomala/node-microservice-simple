const express = require('express');
const app = express();
// const bodyParser = require('body-parser')
const myController = require('./my.controller')();

// app.use(bodyParser.json());

// routes ===========
app.post("/api/getSum", myController.getSum);

//handle errors
app.use(function (err, req, res, next) {
    if (!err) {
        return next();
    }
    console.error(err.stack);
    res.sendStatus(500);
});
// Handle API 404
app.use("/api/*", function (req, res, next) {
    res.sendStatus(404);
});

const port = 3000

app.listen(port || 3000, () => {
    console.log(`server started on ${port}`);
})
