const express = require('express');
var router = express.Router();
router.get('/', (req, res) => {
    return res.render('home')
});

module.exports = router;