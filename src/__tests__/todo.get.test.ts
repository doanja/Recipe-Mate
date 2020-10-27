import { Application } from 'express';
import request from 'supertest';
import { app } from '../server';
import TestVariables from '../helpers/TestVariables';

describe('get tests for /todo', () => {
  const server: Application = app.app;
  const env = new TestVariables();
  let accessToken: string;

  beforeAll(async () => {
    await request(server)
      .post('/login')
      .send({ email: env.registeredEmail, password: env.validPassword })
      .expect(200)
      .then(res => (accessToken = res.body.accessToken));
  });

  afterAll(async () => {
    app.close();
  });

  test('GET /todo with valid access token', async () => {
    await request(server)
      .get('/todo')
      .auth(accessToken, { type: 'bearer' })
      .expect(200)
      .then(res => expect(Array.isArray(res.body)).toBeTruthy());
  });

  test('GET /todo with invalid access token', async () => {
    await request(server).get('/todo').auth(env.invalidToken, { type: 'bearer' }).expect(401);
  });

  test('GET /todo with no access token', async () => {
    await request(server)
      .get('/todo')
      .expect(401)
      .then(res => expect(res.body.error).toEqual('You need be logged in to access this url.'));
  });
});
