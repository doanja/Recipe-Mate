import { Application } from 'express';
import request from 'supertest';
import { app } from '../server';
import TestVariables from '../helpers/TestVariables';
import { deleteTodoById } from '../helpers/testUtils';

describe('add tests for /todo', () => {
  const server: Application = app.app;
  const env = new TestVariables();
  let accessToken: string;
  let newPostId: string;

  beforeAll(async () => {
    await request(server)
      .post('/login')
      .send({ email: env.registeredEmail, password: env.validPassword })
      .expect(200)
      .then(res => (accessToken = res.body.accessToken));
  });

  afterAll(async () => {
    deleteTodoById(newPostId);
    app.close();
  });

  test('POST /todo with valid access token and valid todo', async () => {
    await request(server)
      .post('/todo')
      .auth(accessToken, { type: 'bearer' })
      .send({ text: 'touch the world' })
      .expect(201)
      .then(res => {
        newPostId = res.body.newTodo._id;
        expect(Array.isArray(res.body.todos)).toBeTruthy();
      });
  });

  test('POST /todo with valid access token and an invalid todo', async () => {
    await request(server).post('/todo').auth(accessToken, { type: 'bearer' }).send({ text: '' }).expect(401);
  });

  test('POST /todo with valid access token and without todo', async () => {
    await request(server).post('/todo').auth(accessToken, { type: 'bearer' }).expect(401);
  });

  test('POST /todo with invalid access token', async () => {
    await request(server).post('/todo').auth(env.invalidToken, { type: 'bearer' }).expect(401);
  });

  test('POST /todo with no access token', async () => {
    await request(server).post('/todo').expect(401);
  });
});
