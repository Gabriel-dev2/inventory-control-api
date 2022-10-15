const providerService = require('../services/provider.service');
const { validationResult } = require('express-validator');
const createError = require('http-errors');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await providerService.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
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

        const response = await providerService.findAll();

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

        const response = await providerService.findById(req.params.id);

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

        const response = await providerService.update(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        });

        if (response && response.message) {
            throw response;
        }

        res.send(response);
    } catch (error) {
        return next(error);
    }
}

const deleteProvider = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await providerService.deleteProvider(req.params.id);

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
    update: update,
    findAll: findAll,
    findById: findById,
    deleteProvider: deleteProvider
}