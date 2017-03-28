'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');















const port = process.env.PORT || 3000;
app.set('port', port);

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
