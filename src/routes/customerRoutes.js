const express = require('express');
const router = express.Router();
const customerData = require('../services/customer');

router.get('/', customerData.getCustomerData);
router.get('/:id', customerData.getCustomerDataById);
router.post('/', customerData.addCutomerData);
router.put('/:id', customerData.updateCustomerData);
router.delete('/:id', customerData.deleteCustomerData);

module.exports = router;