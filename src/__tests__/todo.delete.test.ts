import { Application } from 'express';
import request from 'supertest';
import { app } from '../server';
import TestVariables from '../helpers/TestVariables';
import { deleteTodoById } from '../helpers/testUtils';

describe('delete tests for /todo', () => {
  const server: Application = app.app;
  const env = new TestVariables();
  let accessToken: string;
  let newPostId: string;

  beforeAll(async () => {
    await request(server)
      .post('/login')
      .send({ email: env.registeredEmail, password: env.validPassword })
      .then(res => (accessToken = res.body.accessToken));

    await request(server)
      .post('/todo')
      .auth(accessToken, { type: 'bearer' })
      .send({ text: env.todoText })
      .then(res => (newPostId = res.body.newTodo._id));
  });

  afterAll(async () => {
    deleteTodoById(newPostId);
    app.close();
  });

  test('DELETE /todo with valid access token', async () => {
    await request(server)
      .delete(`/todo/${newPostId}`)
      .auth(accessToken, { type: 'bearer' })
      .send({ done: true })
      .expect(201)
      .then(res => expect(Array.isArray(res.body.todos)).toBeTruthy());
  });

  test('DELETE /todo with invalid access token', async () => {
    await request(server).delete(`/todo/${newPostId}`).auth(env.invalidToken, { type: 'bearer' }).expect(401);
  });

  test('DELETE /todo with no access token', async () => {
    await request(server).delete(`/todo/${newPostId}`).expect(401);
  });
});
