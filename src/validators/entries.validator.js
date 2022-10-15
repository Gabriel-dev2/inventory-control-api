const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('item_id', validatorMessage('Item')).exists().bail().isString(),
        body('quantity', validatorMessage('Quantity')).exists().bail().isInt(),
        body('price', validatorMessage('Price')).exists().bail().isFloat(),
        body('provider_id', validatorMessage('Provider ID')).optional({ nullable: true}).isInt(),
    ]
}

const findById = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

module.exports = {
    create: create,
    findById: findById
};