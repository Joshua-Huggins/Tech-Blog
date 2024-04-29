// import dependencies
// router express
const router = require('express').Router();

// Import the index.js from api folder
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;