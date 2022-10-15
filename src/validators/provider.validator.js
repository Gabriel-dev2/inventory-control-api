const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('name', validatorMessage('Name')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('phone', validatorMessage('Phone')).exists().bail().isString(),
    ]
}

const update = function() {
    return [
        body('name', validatorMessage('Name')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('phone', validatorMessage('Phone')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const findById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

const deleteProvider = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt(),
    ]
}

module.exports = {
    create: create,
    update: update,
    findById: findById,
    deleteProvider: deleteProvider
}