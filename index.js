const express = require('express');
const app = express();
const http = require('http').Server(app);
const multer = require('multer');
const cors = require('cors')
const upload = multer();
const bodyParser = require('body-parser');

import stays from './data/stays'

app.use(express.static('client'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', upload.array(), function (req, res, next) {
	switch (req.body.method){
		case 'stays.list':
			res.json({ stays });
			res.end();
			break;
		case 'stays.view':
			if (req.id) {
				res.json({ result: 'corresponding stay' });
			}
			res.end();
			break;
		default:
			res.json({
				result: 'Совпадений не найдено'
			});
			res.end();
			break;
	}
});

http.listen(3001, function() {
	console.log('App listening on port 3001!');
})
