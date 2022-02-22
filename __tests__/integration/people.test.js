/* eslint-disable prettier/prettier */
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../database/app');
const People = require('../../src/app/services/PeopleService');

const person = {};

describe('People', () => {
  beforeAll(async () => {
    person.p1 = await People.create({
      nome: 'Adson Sousa',
      cpf: '131.147.860-49',
      data_nascimento: '27/03/2002',
      email: 'adson@email.com',
      senha: '123456',
      habilitado: 'sim'
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should register a person', async () => {
    const response = await request(app).post('api/v1/people').send({
      nome: 'Marcos Santos',
      cpf: '092.766.554-92',
      data_nascimento: '27/03/2002',
      email: 'marcos@email.com',
      senha: '123456',
      habilitado: 'não'
    });

    expect(response.status).toBe(201);
  });
});
