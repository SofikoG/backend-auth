import { createHmac } from 'crypto'
import User from '../models/User.js'
import { generateAccessToken, CODE_NAME } from './utils.js'

export function getAuth(req, res) {
    return res.render('auth', { error: '' })
}

export async function postAuth(req, res) {
    const { login, password } = req.body

    const candidate = await User.findOne({ login })

    if (!candidate) {
        return res.render('auth', {
            error: 'Пользователь с таким логином не найден',
        })
    }

    //шифрование пароля
    const hash = createHmac('sha256', CODE_NAME).update(password).digest('hex')

    if (candidate.password != hash) {
        return res.render('auth', {
            error: 'Пароль не верный',
        })
    }

    //cookie
    const token = generateAccessToken(candidate._id)
    res.cookie('token', token, { httpOnly: true })

    return res.redirect(`/posts`)
}
