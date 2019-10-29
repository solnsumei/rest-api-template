const dotenv = require('dotenv');

dotenv.config();

const loadConfig = () => {
  const { env } = process;
  return env;
};

module.exports = loadConfig;
