const axios = require('axios').default;

class ViaCepRepository {
  async find(cep) {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
    return data;
  }
}

module.exports = new ViaCepRepository();
