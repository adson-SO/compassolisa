const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const RentalSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  cnpj: {
    type: String,
    unique: true,
    required: true
  },
  atividades: {
    type: String,
    required: true
  },
  endereco: [
    {
      cep: { type: String, unique: true, required: true },
      logradouro: String,
      complemento: { type: String, required: false },
      bairro: String,
      number: { type: String, required: true },
      localidade: String,
      uf: String,
      isFilial: { type: Boolean, required: true },
      _id: false
    }
  ]
});

RentalSchema.plugin(mongoosePaginate);

const Rental = mongoose.model('Rental', RentalSchema);

module.exports = Rental;
