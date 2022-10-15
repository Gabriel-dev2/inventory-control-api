require('dotenv').config();
const itemRepository = require('../repositories/item.repository');
const createError = require('http-errors');


const create = async function(item) {
    const createdItem = await itemRepository.create(item);
    return createdItem;
}

const update = async function(id, item) {
    const itemExists = await itemRepository.findById(id);

    if (!itemExists) {
        return createError(404, 'Item not found');
    }

    await itemRepository.update(id, item);
    
    return await itemRepository.findById(id);
}

const findAll = async function() {
    const items = await itemRepository.findAll();
    return items;
}

const findById = async function(id) {
    const item = await itemRepository.findById(id);

    if (!item) {
        return createError(404, 'Item not found');
    }

    return item;
}

const deleteItem = async function(id) {
    const item = await itemRepository.findById(id);

    if (!item) {
        return createError(404, 'Item not found');
    }

    await itemRepository.deleteItem(id);
    return item;
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    deleteItem: deleteItem
}