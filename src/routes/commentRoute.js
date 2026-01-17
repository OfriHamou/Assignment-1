const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:Id/comments', commentController.createComment);
router.get('/:Id/comments', commentController.getCommentsByPostId);
router.get('/comments/:id', commentController.getCommentById);
router.put('/comments/:id', commentController.updateCommentById);
router.delete('/comments/:id', commentController.deleteCommentById);



module.exports = router;