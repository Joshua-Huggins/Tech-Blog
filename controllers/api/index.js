// dependencies
const router = require('express').Router();

// import routes from their respective files
const userRoutes = require('./user-routes');
const blogpostRoutes = require('./blogpost');
const commentRoute = require('./comments');

// call routes
router.use('/users', userRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/comments', commentRoute);

module.exports = router;