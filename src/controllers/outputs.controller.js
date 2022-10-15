const outputsService = require('../services/outputs.service')
const { validationResult } = require('express-validator')
const createError = require('http-errors');
const { response } = require('express');

const create = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors) {
            throw createError(422, { errors: errors.array() });
        }

        const response = await outputsService.create({
            quantity: req.body.quantity,
            user_id: req.user_id,
            price: req.body.price,
            item_id: req.body.item_id
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

        const response = await outputsService.findAll();

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

        const response = await outputsService.findById(req.params.id);

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
    findById: findById
}