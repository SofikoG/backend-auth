import express from 'express'
import { router } from './src/routers/index.js'

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.set('view engine', 'ejs')

app.listen(3000, () => {
    console.log('Сервер запущен по адресу: http://localhost:3000')
})
