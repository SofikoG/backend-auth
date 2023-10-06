import fs from 'fs'
import * as path from 'path'
import * as uuid from 'uuid'
import User from '../models/User.js'
import Post from '../models/Post.js'

export async function getUsers(req, res) {
    const users = await User.find()

    return res.render('users', { users, auth: req.userId ? true : false })
}

export async function getUserById(req, res) {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        const posts = await Post.find({ creatorId: user._id })

        return res.render(`user`, {
            user,
            posts,
            auth: req.userId ? true : false,
            isOwner: req.userId == id ? true : false,
        })
    } catch {
        return res.send('Пользователь не найден')
    }
}

export async function getUserByIdEdit(req, res) {
    const { id } = req.params
    if (!req.userId || req.userId != id) {
        return res.redirect(`/users/${id}`)
    }
    try {
        const user = await User.findById(id)
        return res.render('userEdit', { user, isSaved: false })
    } catch {
        return res.send('Пользователь не найден')
    }
}

export async function postUserByIdEdit(req, res) {
    const { id } = req.params
    if (!req.userId || req.userId != id) {
        return res.redirect(`/users/${id}`)
    }
    const description = req.body.description.trim() || ''

    //получаеам из тела запроса нашу картинку, даём ей новое случайное название и кладём в папку
    if (req.files) {
        const { file } = req.files

        const fileName = uuid.v4() + file.name.slice(file.name.lastIndexOf('.'))
        await file.mv(path.resolve('public/data/avatars', fileName))
        try {
            const user = await User.findById(id)

            if (user.image) {
                await fs.rmSync(path.resolve('public/data/avatars', user.image))
            }

            user.description = description
            user.image = fileName
            await user.save()
            return res.render('userEdit', { user, isSaved: true })
        } catch {
            return res.send('Не удалось изменить данные пользователя')
        }
    }

    try {
        const user = await User.findById(id)
        user.description = description
        await user.save()
        return res.render('userEdit', { user, isSaved: true })
    } catch {
        return res.send('Не удалось изменить данные пользователя')
    }
}
