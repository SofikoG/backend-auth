import * as path from 'path'
import * as uuid from 'uuid'
import Post from '../models/Post.js'

export function getCreatePost(req, res) {
    if (!req.userId) {
        return res.redirect('/auth')
    }
    return res.render('createPost')
}

export async function postCreatePost(req, res) {
    if (!req.userId) {
        return res.redirect('/auth')
    }
    const { title, description } = req.body

    //получаеам из тела запроса нашу картинку, даём ей новое случайное название и кладём в папку
    const { file } = req.files
    const fileName = uuid.v4() + file.name.slice(file.name.lastIndexOf('.'))
    await file.mv(path.resolve('public/data/postImages', fileName))

    const timestamp = new Date().getTime()

    const postData = {
        title,
        description,
        timestamp,
        creatorId: req.userId,
        pictureName: fileName,
    }
    const post = await Post.create(postData)
    return res.redirect(`/posts/${post._id}`)
}
