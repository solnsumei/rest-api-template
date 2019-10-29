const Joi = require('@hapi/joi');
const assert = require('assert');


// validate function based off joi validation
module.exports = {
  Joi,
  itemTypes: {
    body: 'body',
    params: 'params',
    query: 'query',
  },
  validate: ({ itemType, schema, opt }) => async (ctx, next) => {
    assert(itemType, 'Item type must be provided');
    assert(schema, 'Schema must be provided');

    const toValidateObj = itemType === 'body' ? ctx.request.body : ctx[itemType];
    const options = { ...opt, allowUnknown: true };

    const result = Joi.validate(toValidateObj, schema, { ...options });
    if (!result.error) {
      return next();
    }

    // map through and extract error messages
    const errors = {};
    result.error.details
      .forEach((e) => {
        errors[e.context.key] = e.message.replace(/"/g, '');
      });

    ctx.status = 400;
    ctx.body = {
      errors,
    };
    return ctx.app.emit('error', errors, ctx);
  },
};
