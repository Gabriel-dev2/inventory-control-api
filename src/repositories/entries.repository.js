const { Item, Entries, User, Provider } = require('../database/models/index');

const create = async function (entry) {
    const entryCreated = await Entries.create(entry);
    return entryCreated;
}

const findById = async function (id) {
    const entry = await Entries.findByPk(id);
    return entry;
}

const findAll = async function () {
    const entry = await Entries.findAll({
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: User,
            as: 'user'
        },
        {
            model: Provider,
            as: 'provider'
        }
    ]
    });
    return entry;
}

const findUsingWhere = async function (where) {
    const entry = await Entries.findOne({
        where: where,
        include: [{
            model: Item,
            as: 'item'
        },
        {
            model: User,
            as: 'user'
        },
        {
            model: Provider,
            as: 'provider'
        }
    ]
    });
    return entry;
}

module.exports = {
    create: create,
    findById: findById,
    findAll: findAll,
    findUsingWhere: findUsingWhere
}