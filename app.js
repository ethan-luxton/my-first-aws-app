const express = require("express");
const app = express()

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(3001, () => {
    console.log("Listing on port 3001");
});


