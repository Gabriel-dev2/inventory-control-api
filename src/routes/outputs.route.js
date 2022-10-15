const express = require('express');
const router = express.Router();
const outputsController = require('../controllers/outputs.controller');
const outputsValidator = require('../validators/outputs.validator');
const verifyJWT = require('../middlewares/authorization');

router.post('/', verifyJWT, outputsValidator.create(), outputsController.create);

router.get('/', verifyJWT, outputsController.findAll);

router.get('/:id', verifyJWT, outputsValidator.findById(), outputsController.findById);

module.exports = router;