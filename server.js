'use strict';

const express = require('express');
const app = express();


app.set('view engine', 'pug');

app.use(express.static('img'))

const pastries = [

	{	"name": "eclair",
		"price": 2.99
	},
	{
		"name": "donut",
		"price": .25
	},
	{
		"name": "sprinkles",
		"price": 40.99
	},
	{
		"name": "artery clogger",
		"price": 4.99
	},
	{
		"name": "slow death by chocolate",
		"price": 7.99
	}
	]


app.get('/', (req, res, next) => {
	res.render('index', {index: 'I am an index'})
});

app.get('/about', (req, res, next) => {
	res.render('about', {about: 'I am an about'})
})

app.get('/inventory', (req, res, next) => {
	res.render('inventory', {pastries, loggedIn: false})
})

const port = process.env.PORT || 3000;
app.set('port', port);

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
