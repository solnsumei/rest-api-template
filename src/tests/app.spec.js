const request = require('supertest');
const initApp = require('../app');


let server;

beforeAll(() => {
  server = initApp().callback();
});

describe('Basic routes', () => {
  it('should show the home route', async (done) => {
    const response = await request(server).get('/');

    expect(response.status).toEqual(200);
    expect(response.body.message).toEqual('Hello REST API');
    done();
  });

  it('should return route not found', async (done) => {
    const response = await request(server).get('/mischief');

    expect(response.status).toEqual(404);
    expect(response.body.message).toEqual('Route not found');
    done();
  });

  it('should return method not allowed', async (done) => {
    const response = await request(server).post('/');

    expect(response.status).toEqual(405);
    expect(response.body.message).toEqual('Method Not Allowed');
    done();
  });
});
