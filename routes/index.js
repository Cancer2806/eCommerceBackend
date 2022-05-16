// Define required modules
const router = require('express').Router();
const apiRoutes = require('./api');

// Define route
router.use('/api', apiRoutes);

// Default action if no routes found
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export Modules
module.exports = router;