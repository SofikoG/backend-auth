import express from 'express'
import { getAuth, postAuth } from '../controllers/auth.js'

export const router = express.Router()

router.get('/', getAuth)

router.post('/', postAuth)
