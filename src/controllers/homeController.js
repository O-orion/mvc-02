// JESUS CRISTO É O SENHOR !!!
const HomeModel = require('../models/HomeModel')

// Criando a collection no banco de dados
HomeModel.create({
    titulo: 'O teste',
    descricao: 'Testando a criação da collection'
}).then ( dados => console.log(dados))
  .catch(e => console.log(e))

exports.paginaInicial = (req, res ) => {
    //req.flash('info', "DEUS É BOM")
    console.log(req.flash('info'))
    //req.session.usuario = { nome: 'Lucas Viana Torres' }
    console.log(req.session.usuario)
    res.render('index', { 
      titulo: 'Este é o título da página',
      numeros: [1,2,3,4,5,6,7,8,9]
    })
}

