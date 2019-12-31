const express = require('express');
const router = express.Router();

// Home page route.
router.get('/', function (req, res) {
	req.app.get('next').render(req, res, '/index', {});
})

// About page route.
router.get('/about', function (req, res) {
	req.app.get('next').render(req, res, '/about', {});
})

module.exports = router;
