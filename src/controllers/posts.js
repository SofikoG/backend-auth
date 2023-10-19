import Post from '../models/Post.js'

export async function getPosts(req, res) {
    let page = 1
    if (Number(req.query.page)) {
        page = Number(req.query.page)
    }
    // await Post.deleteMany()
    const count = await Post.count()

    const posts = await Post.find()
        .sort({ _id: -1 })
        .skip((page - 1) * 10)
        .limit(10)

    return res.render('posts', {
        posts,
        auth: req.userId ? true : false,
        page,
        count,
    })
}

export async function getPostById(req, res) {
    const { id } = req.params
    try {
        const post = await Post.findById(id)

        return res.render(`post`, { post, auth: req.userId ? true : false })
    } catch {
        return res.send('Пост не найден')
    }
}
