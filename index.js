import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import { router } from './src/routers/index.js'

dotenv.config()
const MONGO_URL = process.env.MONGO_URL

const app = express()
app.use(cookieParser())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(fileUpload({}))

app.use('/', router)

app.set('view engine', 'ejs')
app.set('views', './src/views')

app.listen(3000, async () => {
    await mongoose.connect(MONGO_URL)
    console.log('Сервер запущен по адресу: http://localhost:3000')
})
