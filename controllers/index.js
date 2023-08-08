const router = require('express').Router();
const Users = require('../models/users');
const Posts = require('../models/posts');
const Comments = require('../models/Comments');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
