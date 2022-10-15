const express = require('express');
const router = express.Router();
const itemReportController = require('../controllers/item-report.controller');
const verifyJWT = require('../middlewares/authorization');

router.get('/item-report', verifyJWT, itemReportController.report);

router.get('/item-report-export', verifyJWT, itemReportController.constructXlsx);

module.exports = router;