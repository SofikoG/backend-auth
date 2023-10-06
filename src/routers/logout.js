import express from 'express'

export const router = express.Router()

router.get('/', (req, res) => {
    res.clearCookie('token')
    return res.redirect('/posts')
})
