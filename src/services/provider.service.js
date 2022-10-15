const providerRepository = require('../repositories/provider.repository');
const createError = require('http-errors');

const _validateIfProviderInformationExists = async function(provider) {

    const providerNameExists = await providerRepository.findUsingWhere({ name: provider.name });

    const providerEmailExists = await providerRepository.findUsingWhere({ email: provider.email });

    const providerPhone = await providerRepository.findUsingWhere({ phone: provider.phone });

    if ( providerNameExists ) {
        return 'A Provider whit this Name already exists';
    }

    if ( providerEmailExists ) {
        return 'A Provider whit this Email already exists';
    }

    if ( providerPhone ) {
        return 'A Provider whit this Phone already exists';
    }
}

const create = async function(provider) {
    const providerExists = await _validateIfProviderInformationExists(provider);
    
    if( providerExists ) {
        return createError(409, providerExists);
    }

    const providerCreated = await providerRepository.create(provider);
    return providerCreated;
}

const update = async function(id, provider) {
    const providerExists = await providerRepository.findById(id);

    if ( !providerExists ) {
        return createError(404, 'Provider don\'t exist');
    }

    //const providerHasSameInfo = await _validateIfProviderInformationExists(provider);

    /*if( providerHasSameInfo ) {
        console.log(providerHasSameInfo)
        return createError(409, providerHasSameInfo);
    }*/

    await providerRepository.update(id, provider);

    return providerExists;
}

const findAll = async function() {
    return await providerRepository.findAll();
}

const findById = async function(id) {
    const provider = await providerRepository.findById(id);

    if ( !provider ) {
        return createError(404, 'Provider don\'t exist');
    }

    return provider;
}

const deleteProvider = async function(id) {
    const providerExists = await providerRepository.findById(id);

    if( !providerExists ) {
        return createError(404, 'Provider don\'t exist');
    }

    await providerRepository.deleteProvider(id);

    return providerExists
}

module.exports = {
    create: create,
    update: update,
    findAll: findAll,
    findById: findById,
    deleteProvider: deleteProvider
}