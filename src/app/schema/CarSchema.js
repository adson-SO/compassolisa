const mongoose = require('mongoose');

const CarSchema = mongoose.Schema({
    modelo: String,
    cor: String,
    ano: Date,
    acessorios: [{ descricao: {
        type: String
    }, _id: false }],
    quantidadePassageiros: Number
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;