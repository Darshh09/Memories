import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message : {
        type: String,
        required: true
    },
    creator : String,
    tags : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;