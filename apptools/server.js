// npm install express body-parser path sequelize mysql2

const express = require('express'),
app = express(),
bodyParser = require('body-parser'),
port = process.env.PORT || 8000,
cors = require('cors');

app.use(cors({
  origin: `http://localhost:${port}`,
  credentials: true
}));

app.use(bodyParser.json());
app.listen(port, () => console.log(`Listening on port: ${port}`));
app.use(express.static(__dirname + '/client/dist/client'));

require('./server/models/sequalize')            // Sequelize
require('./server/config/users/routes')(app)    // Routes