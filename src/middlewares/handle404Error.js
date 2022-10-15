const handler404Error = function(req, rest) {
    rest.status(404);
    rest.send(['Não encontrado']);
}

module.exports = handler404Error;