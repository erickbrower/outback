import express from 'express'
import { Router } from './router'
let routes = new Router()

const app = express()
const port = 5000

app.set('view engine', 'pug')

app.get('/', routes.index)

app.listen(port, () => console.log(`Running on port ${port}`))
