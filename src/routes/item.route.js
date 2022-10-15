const express = require('express');
const router = express.Router();
const itemController = require('../controllers/item.controller');
const itemValidator = require('../validators/item.validator');
const verifyJWT = require('../middlewares/authorization');

router.post('/', verifyJWT, itemValidator.create(), itemController.create);

router.get('/', verifyJWT, itemController.findAll);

router.get('/:id', verifyJWT, itemValidator.findById(), itemController.findById);

router.put('/:id', verifyJWT, itemValidator.update(), itemController.update);

router.delete('/:id', verifyJWT, itemValidator.deleteItem(),itemController.deleteItem);

module.exports = router;