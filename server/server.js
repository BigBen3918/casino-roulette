const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const routes = require('./routes/');
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

axios.defaults.headers.common["Authorization"] = process.env.SECRETCODE;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
});
app.use(express.static(__dirname + "/build"));

routes(router);
app.use('/api', router);

app.get('/*', function (req, res) {
	res.sendFile(__dirname + '/build/index.html', function (err) {
		if (err) {
			res.status(500).send(err)
		}
	})
})

const port = process.env.SERVER_PORT || 5555;
app.listen(port, () => console.log(`Running on port ${port}`));
