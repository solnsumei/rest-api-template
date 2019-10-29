const mongoose = require('mongoose');

/**
 * Connect database
 * @param {Object} { config, logger }
 */
const connectDb = ({ config, logger }) => {
  const dbUrl = config.NODE_ENV === 'Test' ? config.TEST_DB_URL : config.DB_URL;

  mongoose.connect(dbUrl,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      logger.info('Database connected');
    },
    (err) => logger.error(err));
};

module.exports = connectDb;
