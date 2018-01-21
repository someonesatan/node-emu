const express = require('express');
const app = express();
const http = require('http').Server(app);
const multer = require('multer');
const cors = require('cors')
const upload = multer();
const bodyParser = require('body-parser');

const stays = require('./data/stays')

app.use(express.static('client'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/', upload.array(), function (req, res, next) {
	switch (req.body.method){
		case 'stays.list':
			console.log('we receive request')
			res.json({ result: stays });
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
				result: 'Incorrect method'
			});
			res.end();
			break;
	}
});

http.listen(8000, function() {
	console.log('App listening on port 8000!');
})
