const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    nome: {type: String, require: true},
    email: {type: String, require: true},
    senha: {type: String, require: true},
    confirmacaosenha: {type: String, require: true}
})

const usuario = mongoose.model('usuarios', usuarioSchema)
module.exports = usuario


