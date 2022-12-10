module.exports = (req, res, next) => {
    res.locals.umaVariavelLocal = ' Este é o valor da variável local <span style="color:red;">DEUS É BOM</span>'; // transmitindo dados para as rotas;
    console.log("DEUS ME OBSERVA !!!");
    next();
}