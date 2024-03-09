const request = require('supertest');
const app = require('./app'); // Asume que tu aplicación está en un archivo llamado app.js

describe('Request for a home route GET', () => {
  it('should respond with "Hello, World!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});
