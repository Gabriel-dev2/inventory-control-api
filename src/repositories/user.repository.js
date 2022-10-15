const { User } = require('../database/models/index');

const create = async function(user) {
    const createdUser = await User.create(user);
    return createdUser;
}

const findAll = async function() {
    const allUsers = await User.findAll();
    return allUsers;
}

const findById = async function(id) {
    const user = await User.findByPk(id);
    return user;
}

const findUsingWhere = async function(where) {
    const user = await User.findOne({
        where: where
    });

    return user;
}

const update = async function(id, user) {
    await User.update(user, {
        where: {id: id}
    });
}

const deleteUser = async function(id) {
    const user = await User.destroy( { where: { id: id } } );
    return user;
}

module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    findUsingWhere: findUsingWhere,
    update: update,
    deleteUser: deleteUser
};