// CJS (require e module.exports)

// ESM (import e export)

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // Ponto de entraga para o aplicativo
    entry: './src/index.js',
    
    output: {
        // Caminho absoluto para o diretório de saída
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // Configurações do módulo
    module: {
        rules: [
            {
                // Regra para arquivos JavaScript (tanto .js quanto .jsx)
                test: /\.(js|jsx)$/,
                // Excluir arquivos no diretorório 'node_modules'
                exclude: /node_modules/,
                // Usar o loader 'babel-loader' para transpilar os arquivos
                loader: 'babel-loader',
            }
        ]
    },
    // Lista de plugins do webpack
    plugins: [
        // Plugin para gerar automaticamente o arquivo HTML
        new HtmlWebpackPlugin({
            // Template HTML para ser usado
            template: './public/index.html'
        })
    ],
    // Configurações da resolução de modules
    resolve:{
        // Extensões de aruivos a serem resolvidas automaticamente
        extensions: [".js", ".jsx"]
    },
    // Configurações do servidor de desenvolvimente
    devServer: {
        // Configuração de arquivos estáticos a serem servidos
        static: {
            //Diretório a ser servido
            directory: path.join(__dirname, 'dist')
        },
        // Porta do servidor de desenvolvimente
        port: 3000
    }
}