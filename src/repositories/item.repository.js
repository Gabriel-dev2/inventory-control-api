const { Item } = require('../database/models/index');

const create = async function(item) {
    const itemCreated = await Item.create(item);
    return itemCreated;
}

const findAll = async function() {
    const items = await Item.findAll();
    return items;
}

const findById = async function(id) {
    const item = await Item.findByPk(id);
    return item;
}

const update = async function(id, item) {
    await Item.update(item, {
        where: {id: id}
    });
}

const findUsingWhere = async function(where) {
    const item = await Item.findOne({
        where: where
    });

    return item;
}

const deleteItem = async function(id) {
    const item = await Item.destroy( { where: { id: id } } );
    return item;
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    findUsingWhere: findUsingWhere,
    deleteItem: deleteItem
}