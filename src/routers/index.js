import express from 'express'
import { router as registerRouter } from './register.js'
import { router as authRouter } from './auth.js'
import { router as usersRouter } from './users.js'
import { router as postsRouter } from './posts.js'
import { router as logoutRouter } from './logout.js'
import { router as accountRouter } from './account.js'
import authMiddleware from '../middlewares/authMiddleware.js'

export const router = express.Router()

router.get('/', (req, res) => {
    return res.redirect('/posts')
})

router.use('/register', registerRouter)

router.use('/auth', authRouter)

router.use('/users', authMiddleware, usersRouter)

router.use('/posts', postsRouter)

router.use('/logout', logoutRouter)

router.use('/account', authMiddleware, accountRouter)
