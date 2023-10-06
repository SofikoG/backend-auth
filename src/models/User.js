import { Schema, model } from 'mongoose'

const User = new Schema({
    login: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    subscribers: { type: Array },
    subscriptions: { type: Array },
})

export default model('User', User)
