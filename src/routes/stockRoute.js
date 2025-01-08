const express = require('express');
const router = express.Router();

const stockData = require('../services/stock');

router.get('/', stockData.getStockData);
router.post('/add', stockData.addToStock);
router.post('/remove', stockData.removeFromStock);

module.exports = router;