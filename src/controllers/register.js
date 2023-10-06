import { createHmac } from 'crypto'
import User from '../models/User.js'
import { generateAccessToken, CODE_NAME } from './utils.js'

export function getRegister(req, res) {
    return res.render('register', { error: null })
}

export async function postRegister(req, res) {
    const login = req.body.login.trim()
    const password = req.body.password.trim()
    const conPassword = req.body.conPassword.trim()

    if (login.length < 4) {
        return res.render('register', {
            error: 'Логин должен быть больше 6 - 15 символов',
        })
    }

    const candidates = await User.find({ login })

    if (candidates.length != 0) {
        return res.render('register', {
            error: 'Пользователь с таким логином уже существует',
        })
    }

    if (password == conPassword) {
        //шифрование пароля
        const hash = createHmac('sha256', CODE_NAME)
            .update(password)
            .digest('hex')

        const userData = { login, password: hash }
        const user = await User.create(userData)

        //cookie
        const token = generateAccessToken(user._id)
        res.cookie('token', token, { httpOnly: true })

        return res.redirect(`/posts`)
    } else {
        return res.render('register', {
            error: 'Пароли не совпадают',
        })
    }
}
