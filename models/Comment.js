/*
    Comment는 video에 달릴 예정
    -> 둘의 관계를 연관시킬 방법을 찾아야함

    1. video가 comment의 id array를 가지는 방법
    2. 각각의 comment가 video의 id를 가지는 방법

*/


import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    }, 
    createAt: {
        type: Date,
        default: Date.now
    },
})

const model = mongoose.model("Comment",CommentSchema);
export default model;