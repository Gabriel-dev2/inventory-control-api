const { Item, Outputs, User } = require('../database/models/index');

const create = async function (output) {
    const outputCreated = await Outputs.create(output);
    return outputCreated;
}

const findById = async function (id) {
    const output = await Outputs.findByPk(id);
    return output;
}

const findAll = async function () {
    const output = await Outputs.findAll({
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: User,
            as: 'user'
        }]
    });
    return output;
}

const findUsingWhere = async function (where) {
    const output = await Outputs.findOne({
        where: where,
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: User,
            as: 'user'
        }]
    });
    return output;
}

module.exports = {
    create: create,
    findById: findById,
    findAll: findAll,
    findUsingWhere: findUsingWhere
}