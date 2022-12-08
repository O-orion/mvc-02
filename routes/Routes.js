const express = require('express');
const route = express.Router();

// middleWare
function meuMiddleware(req, res, next) {
    console.log('CRISTO ME AMA!')
    next() // sem essa função, fica em loop
}

// Controllers
const homeController = require('../src/controllers/homeController')

route.get('/', (req, res) => {
    res.send('JESUS CRISTO TE AMA')
})

route.get('/nova', (req, res) => {
    res.send("JESUS CRISTO É O SENHOR !!!")
})

route.get('/teste', (req, res) => {
    res.send(
        `
            <h1>DEUS ME AMA E ME OBSERVA!!!</h1>
        `
    )
})

route.get('/home', meuMiddleware, homeController.paginaInicial )

module.exports = route;