import express from 'express'
import { router as registerRouter } from './register.js'
import { router as authRouter } from './auth.js'

export const router = express.Router()

router.get('/', (req, res) => {
    return res.redirect('/home')
})

router.use('/register', registerRouter)

router.use('/auth', authRouter)

// router.get('/home', (req, res) => {
//     const mass = ['animals', 'pictures', 'games', 'lessons']
//     return res.render('home', { items: mass })
// })
router.get('/home', (req, res) => {
    // const posts = ['elftown.jpg', 'forest.jpg', 'mountains.jpg', 'sky.jpg']
    const posts = [
        {
            description: 'My first travel in Paris. Привет мир!',
            date: '11.10.2023',
            image: 'elftown.jpg',
        },
        {
            description: 'This is beuty of nature',
            date: '09.14.2023',
            image: 'forest.jpg',
        },
        {
            description: 'Traveling in the mountains',
            date: '06.03.2023',
            image: 'mountains.jpg',
        },
        {
            description: 'Thats fantasttic! In the sky)',
            date: '08.09.2023',
            image: 'sky.jpg',
        },
    ]
    return res.render('home', { posts })
})
