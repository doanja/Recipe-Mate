import { Application } from 'express';
import request from 'supertest';
import { app } from '../server';
import { deleteUserByEmail, genRandomPassword } from '../helpers/testUtils';
import TestVariables from '../helpers/TestVariables';

describe('tests for /signup', () => {
  const server: Application = app.app;
  const env = new TestVariables();

  afterAll(async () => {
    await deleteUserByEmail(env.unregisteredEmail);
    app.close();
  });

  test('POST /signup with no email or password', async () => {
    await request(server).post('/signup').expect(400);
  });

  test('POST /signup with missing email', async () => {
    await request(server)
      .post('/signup')
      .send({ password: genRandomPassword() })
      .expect(400)
      .then(res => expect(res.body.error).toEqual('ValidationError: this is a required field.'));
  });

  test('POST /signup with missing password', async () => {
    await request(server)
      .post('/signup')
      .send({ email: env.validEmail })
      .expect(400)
      .then(res => expect(res.body.error).toEqual('ValidationError: this is a required field.'));
  });

  test('POST /signup with missing email', async () => {
    await request(server)
      .post('/signup')
      .send({ password: genRandomPassword() })
      .expect(400)
      .then(res => expect(res.body.error).toEqual('ValidationError: this is a required field.'));
  });

  test('POST /signup with registered email', async () => {
    await request(server)
      .post('/signup')
      .send({ email: env.registeredEmail, password: genRandomPassword() })
      .expect(400)
      .then(res => expect(res.body.error.message).toEqual('That email is already taken.'));
  });

  test('POST /signup with unregistered email', async () => {
    await request(server).post('/signup').send({ email: env.unregisteredEmail, password: env.validPassword }).expect(200);
  });
});
