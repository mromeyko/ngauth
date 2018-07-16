const express = require('express');
const cors = require('cors');
const app = express();

const posts = [
    {message: "one"},
    {message: "second"}
] 

app.use(cors());

app.get('/', (req, res)=> {
    res.send(posts);
});

app.listen(3000);