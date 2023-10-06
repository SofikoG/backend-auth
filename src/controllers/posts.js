import Post from '../models/Post.js'
import User from '../models/User.js'

export async function getPosts(req, res) {
    let posts = await Post.find()
    // posts = await posts.map(async post => {
    //     const postsCreator = await User.findById(post.creatorId)
    //     return { ...post, creatorLogin: postsCreator }
    // })

    return res.render('posts', { posts, auth: req.userId ? true : false })
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
