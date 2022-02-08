const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema({
    nome: String,
    cnpj: {
        type: String,
        unique: true
    },
    atividades: String,
    endereco: [
        {
            cep: String,
            number: String,
            isFilial: Boolean
        }
    ]
});

RentalSchema.plugin(mongoosePaginate);

const Rental = mongoose.model('Rental', RentalSchema);

module.exports = Rental;