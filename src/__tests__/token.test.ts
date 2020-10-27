import { Application } from 'express';
import request from 'supertest';
import { app } from '../server';
import { deleteUserByEmail } from '../helpers/testUtils';
import TestVariables from '../helpers/TestVariables';

describe('tests for /refresh-token, /access-token, and /logout', () => {
  const server: Application = app.app;
  const env = new TestVariables();
  let refreshToken: string;
  let accessToken: string;

  beforeAll(async () => {
    await request(server)
      .post('/login')
      .send({ email: env.registeredEmail, password: env.validPassword })
      .expect(200)
      .then(res => (refreshToken = res.body.refreshToken));
  });

  afterAll(async () => {
    app.close();
  });

  // tests for /refresh-token

  test('POST /refresh-token with no refresh token', async () => {
    await request(server).post('/refresh-token').expect(401);
  });

  test('POST /refresh-token invalid refresh token', async () => {
    await request(server).post('/refresh-token').send({ refreshToken: env.invalidToken }).expect(401);
  });

  test('POST /refresh-token valid refresh token', async () => {
    await request(server)
      .post('/refresh-token')
      .send({ refreshToken })
      .expect(201)
      .then(res => (refreshToken = res.body.refreshToken));
  });

  // tests for /access-token

  test('POST /access-token with no access token', async () => {
    await request(server).post('/access-token').expect(401);
  });

  test('POST /access-token invalid access token', async () => {
    await request(server).post('/access-token').send({ refreshToken: env.invalidToken }).expect(401);
  });

  test('POST /access-token valid access token', async () => {
    await request(server)
      .post('/access-token')
      .send({ refreshToken })
      .expect(201)
      .then(res => (accessToken = res.body.accessToken));
  });

  // tests for /logout

  test('POST /logout with no refresh token', async () => {
    await request(server).post('/logout').expect(401);
  });

  test('POST /logout with invalid refresh token', async () => {
    await request(server).post('/logout').send({ refreshToken: env.invalidToken }).expect(401);
  });

  test('POST /logout with valid refresh token', async () => {
    await request(server)
      .post('/logout')
      .send({ refreshToken })
      .expect(201)
      .then(res => expect(res.body.message).toEqual('Logout success'));
  });
});
