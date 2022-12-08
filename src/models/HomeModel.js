// JESUS CRISTO É O SENHOR !!!
const mongoose = require('mongoose');

// Criando o schema o, esqueleto do nosso modelo
const HomeSchema = new mongoose.Schema({
    titulo: {type: String, required: true},
    descricao: String
})

// Criando o modelo
const HomeModel = mongoose.model('Home', HomeSchema) // Home é o nome, homeschema é o schema

module.exports = HomeModel;
