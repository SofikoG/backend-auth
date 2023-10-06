import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
export const CODE_NAME = process.env.CODE_NAME
const JWT_SECRET = process.env.JWT_SECRET

export function generateAccessToken(id) {
    const payload = { id }
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d',
    })
}
