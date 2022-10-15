const userService = require('../services/user.service');
const { validationResult } = require('express-validator')
const createError = require('http-errors');
const { response } = require('express');

const create = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors) {
            throw createError(422, { errors: errors.array() });
        }
        const response = await userService.create(req.body);

        if(response && response.message) {
            throw response;
        }
        
        res.send(response);
    } catch (error) {
        return next(error);
    }
    
    
}

const findAll = async function(req, res, next) {
    try {
        const response = await userService.findAll();

        if(response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const findById = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await userService.findById(req.params.id);

        if(response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const update = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if(!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await userService.update(req.params.id, { name: req.body.name });

        if(response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const deleteUser = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, {errors: errors.array() });
        }

        const response = await userService.deleteUser(req.params.id);

        if (response & response.message) {
            throw response;
        }
        
        res.send(response);
    } catch (error) {
        next(error);
    }
}

const login = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            throw createError(422, {errors: errors.array() });
        }

        const response = await userService.login(req.body);

        if (response & response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

module.exports = { 
    create: create,
    findAll: findAll,
    findById: findById,
    update: update,
    deleteUser: deleteUser,
    login: login
};