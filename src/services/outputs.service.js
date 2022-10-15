require('dotenv').config();
const outputsRepository = require('../repositories/outputs.repository');
const itemRepository = require('../repositories/item.repository');
const createError = require('http-errors');


const create = async function(output) {
    const item = await itemRepository.findById(output.item_id);

    if (!item) {
        return createError(404, 'Item does not exist, Invalid Output');
    }

    if (item.quantity <= 0) {
        return createError(400, 'Item does not exist, Invalid Output');
    }

    const createdOutputs = await outputsRepository.create(output);

    const quantity = item.quantity - createdOutputs.quantity;

    await itemRepository.update(item.id, { quantity });

    return createdOutputs;
}

const findAll = async function() {
    const outputs = await outputsRepository.findAll();
    return outputs;
}

const findById = async function(id) {
    const output = await outputsRepository.findById(id);

    if (!output) {
        return createError(404, 'Entry not found');
    }

    return output;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById
}