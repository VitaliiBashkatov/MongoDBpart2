const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.get('/:id/articles', userController.getUsersArticles)

module.exports = router;