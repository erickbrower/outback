import express from 'express'
import router from './routes/routes'

const app = express()
const port = 5000

app.set('view engine', 'pug')

app.use('/', router)

app.listen(port, () => console.log(`Running on port ${port}`))
