const userRoutes = require('./user.route');
const express = require('express');
const router = express.Router();
const articlesRoutes = require('./artucles.route')

router.use('/user', userRoutes);
router.use('/articles',articlesRoutes);

module.exports = router;
