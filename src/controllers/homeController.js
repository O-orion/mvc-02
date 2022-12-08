// JESUS CRISTO É O SENHOR !!!
const HomeModel = require('../models/HomeModel')

// Criando a collection no banco de dados
HomeModel.create({
    titulo: 'O teste',
    descricao: 'Testando a criação da collection'
}).then ( dados => console.log(dados))
  .catch(e => console.log(e))

exports.paginaInicial = (req, res ) => {
    res.render('index')
}

