const http = require('http');
const config = require('../config')();
const initializeApp = require('../app');

const app = initializeApp();

http.createServer(app.callback())
  .listen(config.PORT || 3000);
