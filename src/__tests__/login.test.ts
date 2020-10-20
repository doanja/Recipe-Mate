import { Application } from 'express';
import request from 'supertest';
import { app } from '../server';
import { genRandomPassword } from '../helpers/testUtils';
import TestVariables from '../helpers/TestVariables';

describe('tests for /login', () => {
  const server: Application = app.app;
  const env = new TestVariables();

  afterAll(async () => {
    app.close();
  });

  test('POST /login with registered email and password', async () => {
    await request(server).post('/login').send({ email: env.registeredEmail, password: env.validPassword }).expect(200);
  });

  test('POST /login with unregistered email', async () => {
    await request(server)
      .post('/login')
      .send({ email: env.unregisteredEmail, password: genRandomPassword() })
      .expect(400)
      .then(res => expect(res.body.error.message).toEqual('That email is not found.'));
  });

  test('POST /login with incorrect password', async () => {
    await request(server)
      .post('/login')
      .send({ email: env.registeredEmail, password: genRandomPassword() })
      .expect(400)
      .then(res => expect(res.body.error.message).toEqual('The password is incorrect.'));
  });

  test('POST /login with no credntials', async () => {
    await request(server).post('/login').expect(400);
  });
});
