const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

router.post('/:Id/comments', commentController.createComment);



module.exports = router;