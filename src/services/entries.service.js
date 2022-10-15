require('dotenv').config();
const entriesRepository = require('../repositories/entries.repository');
const itemRepository = require('../repositories/item.repository');
const createError = require('http-errors');


const create = async function(entry) {
    const item = await itemRepository.findById(entry.item_id);

    if (!item) {
        return createError(404, 'Item does not exist, Invalid Entry');
    }

    const createdEntries = await entriesRepository.create(entry);

    const quantity = createdEntries.quantity + item.quantity;

    await itemRepository.update(item.id, { quantity: quantity });

    return createdEntries;
}

const findAll = async function() {
    const entries = await entriesRepository.findAll();
    return entries;
}

const findById = async function(id) {
    const entry = await entriesRepository.findUsingWhere({id: id});

    if (!entry) {
        return createError(404, 'Entry not found');
    }

    return entry;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById
}