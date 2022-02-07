const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CarSchema = mongoose.Schema({
  modelo: String,
  cor: String,
  ano: String,
  acessorios: [{ descricao: String }],
  quantidadePassageiros: Number
});

CarSchema.plugin(mongoosePaginate);

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;