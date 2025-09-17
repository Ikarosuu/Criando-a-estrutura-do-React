// CJS (require e module.exports)

// ESM (import e export)

const path = require('path')

module.exports = {
    // Ponto de entraga para o aplicativo
    entry: './src/index.js',
    
    output: {
        // Caminho absoluto para o diretório de saída
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    }
}