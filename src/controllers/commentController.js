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




module.exports = {
    createComment,
};