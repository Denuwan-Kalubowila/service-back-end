const express = require('express');
const router = express.Router();
const partsData = require('../services/spareParts');

router.get('/', partsData.getSparePartsData);
router.get('/:id', partsData.getSparePartsDataById);
router.post('/', partsData.addSparePartsData);
router.put('/:id', partsData.updateSparePartsData);
router.delete('/:id', partsData.deleteSparePartsData);

module.exports = router;