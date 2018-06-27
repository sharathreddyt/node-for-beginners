const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/post/:id/', (req, res) => {

    res.send(

        `
    <p>
    here is ${req.params.id}
    </p>
    `
    );

});

app.get('/post/:id/category/:categoryId', (req, res) => {

    res.send(

        `
    <p>
    here is ${req.params.categoryId}
    </p>
    `
    );

});

app.listen(9090);