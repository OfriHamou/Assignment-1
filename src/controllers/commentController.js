const Comment = require('../models/commentModel');

// Create a new comment
const createComment = async (req, res) => {
    try {
        const postId = req.params.Id;
        const newComment = new Comment({
            ...req.body,
            "postId": postId
        });
        await newComment.save();
        res.status(201).json(newComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getCommentsByPostId = async (req, res) => {
    try {
        const postId = req.params.Id;
        const comments = await Comment.find({ "postId": postId });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCommentById = async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.id);
        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        res.status(200).json(comment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




module.exports = {
    createComment,
    getCommentsByPostId,
    getCommentById,
};