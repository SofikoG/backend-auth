import express from 'express'
import { getRegister, postRegister } from '../controllers/register.js'

export const router = express.Router()

router.get('/', getRegister)

router.post('/', postRegister)
