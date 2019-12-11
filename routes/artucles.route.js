const express = require('express');
const router = express.Router();

const articleController = require('../controllers/articles');

router.post('/', articleController.createArticle);
router.get('/',  articleController.getArticle);
router.put('/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;