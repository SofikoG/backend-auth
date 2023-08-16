import User from '../models/User.js'

export function getRegister(req, res) {
    return res.render('register', {})
}

export async function postRegister(req, res) {
    const { login, password, conPassword } = req.body
    if (password == conPassword) {
        const userData = { login, password }
        const user = await User.create(userData)
        console.log(user)
        return res.send('Пользователь зарегистрирован')
    } else {
        return res.send('Ошибка при регистрации (пароли не совпадают)')
    }
    // const userData = { login, password }
    // const user = await User.create(userData)
    // console.log(user)
    // return res.send(user)
    // if (password == conPassword) {
    //     return res.send('Пользователь зарегистрирован')
    // } else {
    //     return res.send('Ошибка при регистрации (пароли не совпадают)')
    // }
}
