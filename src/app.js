const Koa = require('koa');
const BodyParser = require('koa-bodyparser');
const logger = require('pino')();

const connectDb = require('./lib/db');
const config = require('./config')();
const defaultRouter = require('./routers/default');


// Initialize app
const initializeApp = () => {
  const app = new Koa();

  // use bodyparser
  app.use(BodyParser());

  // Default error handler
  app.use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {
      // respond with JSON
      ctx.status = err.status || 500;
      ctx.body = {
        message: err.message,
      };
      ctx.app.emit('error', err, ctx);
    }
  });

  app.use(defaultRouter.routes())
    .use(defaultRouter.allowedMethods({
      throw: true,
    }));

  app.use(async (ctx) => {
    ctx.body = { message: 'Route not found' };
    ctx.status = 404;
  });

  app.on('error', (err) => {
    logger.error(err.message);
  });

  connectDb({ config, logger });

  return app;
};

module.exports = initializeApp;
