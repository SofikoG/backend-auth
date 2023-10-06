import express from 'express'
import {
    getUserById,
    getUsers,
    getUserByIdEdit,
    postUserByIdEdit,
} from '../controllers/users.js'

export const router = express.Router()

router.get('/', getUsers)
router.get('/:id', getUserById)
router.get('/:id/edit', getUserByIdEdit)
router.post('/:id/edit', postUserByIdEdit)
