import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const JWT_SECRET = process.env.JWT_SECRET

export default function (req, res, next) {
    const token = req.cookies.token

    // if (!token) {
    //     return res.send('<a href="/auth" >Войдите</a> в систему')
    // }

    try {
        const access = jwt.verify(token, JWT_SECRET)
        req.userId = access.id
    } catch {
        res.clearCookie('token')
    }
    next()
}
