const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const path = require('path')

const app = express();
const serverPort = process.env.SERVER_PORT;
app.use(bodyParser.json());
app.use( express.static( `${__dirname}/../build` ) );

app.listen(serverPort, () => {
  console.log('Backend port: ', serverPort);
})