const request = require('supertest');
const app = require('../index.js');

describe('GET /findAllSlots', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/findAllSlots')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
