export function getAuth(req, res) {
    return res.render('auth', {})
}

export function postAuth(req, res) {
    const users = [
        {
            login: 'YAto',
            password: '12',
        },
        {
            login: 'qwerty',
            password: '34',
        },
        {
            login: 'uiop',
            password: '56',
        },
    ]

    const { login, password } = req.body

    let userFind = false

    users.forEach(user => {
        if (user.login == login && user.password == password) {
            userFind = true
        }
    })

    if (userFind) {
        return res.send(`ВЫ Вошли под ${login}`)
    }

    return res.send('<a href="/auth">Такого пользователя нет</a>')
}
