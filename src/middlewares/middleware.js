exports.middleWare = (req, res, next) => {
    res.locals.umaVariavelLocal = ' Este é o valor da variável local <span style="color:red;">DEUS É BOM</span>'; // transmitindo dados para as rotas;
    console.log("DEUS ME OBSERVA !!!");
    next();
}

exports.checksCsfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('notFound')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}
