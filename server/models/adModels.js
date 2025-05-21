import mongoose from "mongoose";

const adSchema = new mongoose.Schema({
    name: String,
    images:  [
        {
            img: String,
        },
    ],
    link: String,
}, {timestamps: true})

export default mongoose.model('Advertisement', adSchema)