import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
    if (!req.userId) {
        return res.redirect('/posts')
    }
    const newRoute = `/users/${req.userId}`
    return res.redirect(newRoute)
})
