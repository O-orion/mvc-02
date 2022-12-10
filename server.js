require('dotenv').config()
const express = require('express');
const app = express();
// REALIZANDO  A CONEXÃO COM BANCO DE DADOS MONGODB
//const MongoStore = require('conect-mongo');
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
                                                                                                            console.log('Conexão estabelecidade')
                                                                                                            // emitindo para express que conseguimos conectar ao banco de dados
                                                                                                            app.emit('connectado')
                                                                                                      })
                                                                                                    .catch(() => console.log('Erro na conexão'))

const session = require('express-session') // chamdno a session
const MongoStore = require('connect-mongo') // passando a sessão
const flash = require('connect-flash');



const Routes = require('./routes/Routes');
const path = require('path')
const middleWare = require('./src/middlewares/middleware') // chamando o middlware


app.use( express.urlencoded( { extended: true } ) );
app.use(express.static(path.resolve(__dirname, 'public')) ) // Permitindo que seja adicionando conteúdo estático

const sessionOptions =  session({
    secret: 'JESUS CRISTO É O SENHOR !!!',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
})

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views')) // setando as views
app.set('view engine', 'ejs') // definindo a engine da view que queremos, existem várias

app.use(middleWare)
app.use(Routes);

//  capturando o valor emitido é em seguida iniciando o app
app.on('connectado', () => {

    app.listen(4000, (req, res) => {
        console.log('SERVE ON PORT 4000')
    })

})
