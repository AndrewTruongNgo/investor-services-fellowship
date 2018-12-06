const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
require('dotenv').config(path.join(__dirname, '/../.env'));

const DIST_DIR = path.join(__dirname, '../client/dist/');

const app = express();
app.use(bodyParser.json());
app.use(express.static(DIST_DIR));


app.listen(3000, () => console.log(`Listening on port 3000...`));
