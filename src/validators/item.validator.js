const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('name', validatorMessage('Name')).exists().bail().isString()
    ]
}

const findById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const update = function() {
    return [
        body('name', validatorMessage('Name')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const deleteItem = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

module.exports = {
    create: create,
    findById: findById,
    update: update,
    deleteItem: deleteItem,
};