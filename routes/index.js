var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ status: true });
});

router.get('/add', (req, res) => {
  const { a, b } = req.query;
  if (a && b) {
    const aNumber = Number(a);
    const bNumber = Number(b);
    return res.json({ value: aNumber + bNumber })
  }
  res.status(400).send('Invalid query');
});

module.exports = router;
