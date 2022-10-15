const itemService = require('../services/item.service')
const { validationResult } = require('express-validator')
const createError = require('http-errors');
const { response } = require('express');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await itemService.create({
            name: req.body.name,
            user_id: req.user_id
        });

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const findAll = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await itemService.findAll();

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const findById = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await itemService.findById(req.params.id);

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const update = async function (req, res, next) {
    try {

        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await itemService.update(req.params.id, { name: req.body.name });

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const deleteItem = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await itemService.deleteItem(req.params.id);

        if (response && response.message) {
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
    deleteItem: deleteItem
}