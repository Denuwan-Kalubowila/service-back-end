const express = require('express');
const router = express.Router();

const invoiceData = require('../services/invoice');

router.get('/', invoiceData.getInvoiceData);
router.get('/:id', invoiceData.getInvoiceDataByDate);
router.post('/', invoiceData.addInvoiceData);
router.put('/:id', invoiceData.updateInvoiceData);
router.delete('/:id', invoiceData.deleteInvoiceData);

module.exports = router;