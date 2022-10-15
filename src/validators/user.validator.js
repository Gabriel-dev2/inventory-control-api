const { body, param } = require('express-validator');
const { validatorMessage } = require('../utils/errorMessage');

const create = function() {
    return [
        body('name', validatorMessage('Name')).exists().bail().isString(),
        body('email', validatorMessage('Email')).exists().bail().isString(),
        body('password', validatorMessage('Password')).exists().bail().isString()
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
        body('email', validatorMessage('Email')).exists().bail().isString(),
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const deleteUser = function() {
    return [
        param('id', validatorMessage('Id')).exists().bail().isInt()
    ]
}

const login = function() {
    return [
        body("email", validatorMessage('Email')).exists().bail().isString(),
        body("password", validatorMessage("Password")).exists().bail().isString(),
    ]
}

module.exports = {
    create: create,
    findById: findById,
    update: update,
    deleteUser: deleteUser,
    login: login,
};