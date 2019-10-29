# REST API Template
Template for building REST APIs with Node and Koa JS

### Features
- App setup
- Linting
- Router
- Test setup
- Database setup
- Logging
- Validation setup with @hapi/joi

### Built with
- Node
- MongoDB
- KoaJS

### Usage
- Fork the repository
- Install dependencies using either `yarn install` or `npm install`
- Setup your database and environmental variables as shown in the .env.example file
- Add your code
- Run

### Using the validator
- From your middleware folder, create a .js file to hold your middleware
#### Example 
```
  const { Joi, itemTypes, validate } = require('../utils/validator');

  const registrationSchema = {
    username: Joi.string().min(4).max(30).required(),
    password: Joi.string().required()
  };

  const validateRegistration = () => validate({
    schema: registrationSchema,
    itemType: itemType.body,
    opt: { abortEarly: false }
  });

  module.exports = validateRegistration;
```

#### In your router
- import the validateRegistration middleware for the registration route
- Then add it to your route
```
  router.post('/api/v1/signup', validateRegistration(), (ctx) => {
    // Enter signup code here...
  });
```

### Creating Database Models
- create a models folder inside the `src` folder
- define your mongoose models and you are good to go.

### Run
- run `yarn start`

### Testing
- run `yarn test`

