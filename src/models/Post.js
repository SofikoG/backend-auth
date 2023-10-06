import { Schema, model } from 'mongoose'

const Post = new Schema({
    pictureName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    creatorId: { type: String, required: true },
    timestamp: { type: String, required: true },
})

export default model('Post', Post)
