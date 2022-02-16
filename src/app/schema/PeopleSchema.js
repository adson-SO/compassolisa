const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PeopleSchema = mongoose.Schema({
  nome: String,
  cpf: {
    type: String,
    unique: true
  },
  data_nascimento: String,
  email: {
    type: String,
    unique: true
  },
  senha: String,
  habilitado: {
    type: String,
    enum: ['sim', 'não']
  }
});

PeopleSchema.plugin(mongoosePaginate);

const People = mongoose.model('People', PeopleSchema);

module.exports = People;
