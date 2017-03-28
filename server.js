'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
	res.render('index', {index: 'I am an index'})
});

app.get('/about', (req, res, next) => {
	res.render('about', {about: 'I am an about'})
})

app.get('/inventory', (req, res, next) => {
	res.render('inventory', {inventory: 'I am an inventory'})
})

const port = process.env.PORT || 3000;
app.set('port', port);

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
