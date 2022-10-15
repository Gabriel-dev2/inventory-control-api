const express = require('express');
const router = express.Router();
const entriesController = require('../controllers/entries.controller');
const entriesValidator = require('../validators/entries.validator');
const verifyJWT = require('../middlewares/authorization');

router.post('/', verifyJWT, entriesValidator.create(), entriesController.create);

router.get('/', verifyJWT, entriesController.findAll);

router.get('/:id', verifyJWT, entriesValidator.findById(), entriesController.findById);

module.exports = router;