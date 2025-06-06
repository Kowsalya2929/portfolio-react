import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    firstName: {type: String,required: true},
    lastName: {type: String,required: true},
    email: {type: String,required: true},
    sub: {type: String,required: true},
    msg: {type: String,required: true}
},{timestamps: true})

export const Contact = mongoose.model('Contact',contactSchema)