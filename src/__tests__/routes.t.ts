import request from 'supertest';
import express from 'express';
import router from '../routes/routes'


const app = express()

app.set('view engine', 'pug')

app.use('/', router)

describe('Routes Check', () => {
  test('responds to /', async () => {
    const res = await request(app).get('/')
    expect(res.header['content-type']).toBe('text/html; charset=utf-8')
    console.log(res.text)
    expect(res.statusCode).toBe(200)
  })
})
