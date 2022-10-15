const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyJWT = require('../middlewares/authorization');
const userValidator = require('../validators/user.validator');

router.post('/', verifyJWT, userValidator.create(), userController.create);

router.get('/', verifyJWT, userController.findAll);

router.get('/:id', verifyJWT, userValidator.findById(), userController.findById);

router.put('/:id', verifyJWT, userValidator.update(), userController.update);

router.delete('/:id', verifyJWT, userValidator.deleteUser(),userController.deleteUser);

router.post('/login', userValidator.login(), userController.login);

module.exports = router;