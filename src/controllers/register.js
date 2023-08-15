export function getRegister(req, res) {
    return res.render('register', {})
}

export function postRegister(req, res) {
    const { password, conPassword } = req.body

    if (password == conPassword) {
        return res.send('Пользователь зарегистрирован')
    } else {
        return res.send('Ошибка при регистрации (пароли не совпадают)')
    }
}
