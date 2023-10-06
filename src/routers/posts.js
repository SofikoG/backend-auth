import express from 'express'
import { getPosts, getPostById } from '../controllers/posts.js'
import { getCreatePost, postCreatePost } from '../controllers/createPost.js'
import authMiddleware from '../middlewares/authMiddleware.js'

export const router = express.Router()

router.get('/', authMiddleware, getPosts)

router.get('/create', authMiddleware, getCreatePost)

router.post('/create', authMiddleware, postCreatePost)

router.get('/:id', authMiddleware, getPostById)
