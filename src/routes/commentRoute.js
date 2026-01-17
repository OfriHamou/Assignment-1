const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:Id/comments', commentController.createComment);
router.get('/:Id/comments', commentController.getCommentsByPostId);
router.get('/comments/:id', commentController.getCommentById);



module.exports = router;