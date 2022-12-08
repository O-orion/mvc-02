//  JESUS CRISTO É O SENHOR !!!
const path = require('path'); // NODE UTILIZA CommonJS para gerência os módulos

// exportando o objeto que contém a configuração do webpack
module.exports = {
    mode: 'development', // indica o modo que estamos trabalhando
    entry: './frontend/index.js', // arquivo de entrada a ser traduzido para os nevegadores
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js' // arquivo que contém todos os arquivos da aplicação.
    }, // saída do arquivo traduzido
    module: {
        rules: [{
            exclude: /node_modules/, // excluindo a pasta node modules de nosso sistema
            test: /\.js$/, // indicando o arquio que webpack irá utilizar
            use: {
                    loader: 'babel-loader', // estamos dizendo que ele vai usar babel loader
                    options: {
                                  presets: ['@babel/env'] // adicionando as opções com presets que é um array, passando babel/env
                             }
            },
        }]
    }, // são as regras da nossa aplicação;
    devtool: 'source-map' // mapea a raiz onde foi gerado o erro;
}

