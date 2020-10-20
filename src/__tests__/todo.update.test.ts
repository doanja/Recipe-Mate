import { Application } from 'express';
import request from 'supertest';
import { app } from '../server';
import TestVariables from '../helpers/TestVariables';
import { deleteTodoById } from '../helpers/testUtils';

describe('update tests for /todo', () => {
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

  test('PUT /todo with valid access token and a valid todo with done', async () => {
    await request(server)
      .put(`/todo/${newPostId}`)
      .auth(accessToken, { type: 'bearer' })
      .send({ done: true })
      .expect(200)
      .then(res => expect(Array.isArray(res.body.todos)).toBeTruthy());
  });

  test('PUT /todo with valid access token and a valid todo with text', async () => {
    await request(server)
      .put(`/todo/${newPostId}`)
      .auth(accessToken, { type: 'bearer' })
      .send({ text: env.todoText })
      .expect(200)
      .then(res => expect(Array.isArray(res.body.todos)).toBeTruthy());
  });

  test('PUT /todo with valid access token and a valid todo with text and done', async () => {
    await request(server)
      .put(`/todo/${newPostId}`)
      .auth(accessToken, { type: 'bearer' })
      .send({ text: env.todoText, done: true })
      .expect(200)
      .then(res => expect(Array.isArray(res.body.todos)).toBeTruthy());
  });

  test('PUT /todo with valid access token and a invalid done update', async () => {
    await request(server).put(`/todo/${newPostId}`).auth(accessToken, { type: 'bearer' }).send({ done: env.todoText }).expect(401);
  });

  test('PUT /todo with valid access token and an no text update', async () => {
    await request(server)
      .put(`/todo/${newPostId}`)
      .auth(accessToken, { type: 'bearer' })
      .send({ text: '' })
      .expect(200)
      .then(res => expect(Array.isArray(res.body.todos)).toBeTruthy());
  });

  test('PUT /todo with valid access token and without body', async () => {
    await request(server)
      .put(`/todo/${newPostId}`)
      .auth(accessToken, { type: 'bearer' })
      .expect(200)
      .then(res => expect(Array.isArray(res.body.todos)).toBeTruthy());
  });

  test('PUT /todo with invalid access token', async () => {
    await request(server).put(`/todo/${newPostId}`).auth(env.invalidToken, { type: 'bearer' }).expect(401);
  });

  test('PUT /todo with no access token', async () => {
    await request(server).put(`/todo/${newPostId}`).expect(401);
  });
});
