const { Provider } = require('../database/models/index');

const create = async function(provider) {
    const providerCreated = await Provider.create(provider);
    return providerCreated;
}

const update = async function(id, provider) {
    await Provider.update(provider, {
        where: {id: id}
    });
}

const findAll = async function() {
    const providers = await Provider.findAll();
    return providers;
}

const findById = async function(id) {
    const provider = await Provider.findByPk(id);
    return provider;
}

const deleteProvider = async function(id) {
    const provider = await Provider.destroy({ where: { id: id } });
    return provider;
}

const findUsingWhere = async function(where) {
    const provider = await Provider.findOne({
        where: where
    });

    return provider;
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    deleteProvider: deleteProvider,
    findUsingWhere: findUsingWhere
}