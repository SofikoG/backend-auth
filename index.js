import express from 'express'
import mongoose from 'mongoose'
import { router } from './src/routers/index.js'

const app = express()
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, async () => {
    await mongoose.connect(
        'mongodb+srv://SofikoG:V3uk9JFc27whnQdq@cluster0.v0cr5qr.mongodb.net/'
    )
    console.log('Сервер запущен по адресу: http://localhost:3000')
})

//mongodb+srv://SofikoG:V3uk9JFc27whnQdq@cluster0.v0cr5qr.mongodb.net/
