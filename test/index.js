const request = require('supertest');

const app = require('../app');

describe('GET /', () => {
  it('responds with status true', (done) => {
    request(app)
      .get('/')
      .expect(200, { status: true }, done);
  });
});

describe('GET /add', () => {
  it('respond with correct addition', (done) => {
    request(app)
      .get('/add?a=1&b=2')
      .expect(200, { value: 3 }, done);
  });
  it('respond with error when no inputs', (done) => {
    request(app)
      .get('/add')
      .expect(400, done);
  });
});
