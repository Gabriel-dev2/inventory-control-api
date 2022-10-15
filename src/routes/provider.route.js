const express = require('express');
const router = express.Router();
const providerController = require('../controllers/provider.controller');
const providerValidator = require('../validators/provider.validator');
const verifyJWT = require('../middlewares/authorization');

router.post('/', verifyJWT, providerValidator.create(), providerController.create);

router.get('/', verifyJWT, providerController.findAll);

router.get('/:id', verifyJWT, providerValidator.findById(), providerController.findById);

router.put('/:id', verifyJWT, providerValidator.update(), providerController.update);

router.delete('/:id', verifyJWT, providerValidator.deleteProvider(), providerController.deleteProvider);

module.exports = router;