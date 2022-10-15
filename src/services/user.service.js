require('dotenv').config();
const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const createError = require('http-errors');
const { sign }  = require('jsonwebtoken');

const create = async function(user) {
    const userExists = await userRepository.findUsingWhere({ email: user.email });

    if( userExists ) {
        return createError(409, 'User already exists');
    }

    user.password = await bcrypt.hash(user.password, ~~process.env.SALT);
    const createdUser = await userRepository.create(user);
    return createdUser;
}

const findAll = async function() {
    const users = await userRepository.findAll();
    return users;
}

const findById = async function(id) {
    const user = await userRepository.findById(id);

    if(!user) {
       return createError(404, "User not found"); 
    }
    return user;
}

const update = async function(id, user) {
    const userExists = await userRepository.findUsingWhere({ email: user.email });

    if( !userExists ) {
        return createError(404, 'User don\'t exist');
    }

    await userRepository.update(user);
    
    return await userRepository.findById(id);
}

const deleteUser = async function(id) {
    const userExists = await userRepository.findById(id);

    if( !userExists ) {
        return createError(404, 'User don\'t exist');
    }

    await userRepository.deleteUser(id);

    return userExists
}

const login = async function(user) {
    const userLogin = await userRepository.findUsingWhere({ email: user.email });

    if( !userLogin ) {
        return createError(401, 'Invalid user');
    }

    const comparePassword = await bcrypt.compare(user.password, userLogin.password);

    if (!comparePassword) {
        return createError(401, 'Unnauthorized');
    }

    const token = sign({
        id: userLogin.id, 
        data: {
            'name': userLogin.name,
            'email': userLogin.email
        } 
    }, process.env.SECRET, {
        expiresIn: Math.floor(Date.now() / 10000000) + (5 * 60) });

    delete userLogin.password;

    return {
        auth: true,
        userName: userLogin.name,
        email: userLogin.email,
        token: token
    }
}
module.exports = {
    create: create,
    findAll: findAll,
    findById: findById,
    update: update,
    deleteUser: deleteUser,
    login: login
};