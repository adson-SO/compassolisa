<h1 align="center">🧭 Compassolisa 🚗</h1>

> Developing ⚠️

## Descrição 

<h3 align="center">
  API REST que permite cadastrar carros e clientes da Compassolisa, uma locadora de veículos de luxo e semi-luxo.
</h3>

### 🛠️ Tecnologias e ferramentas

- Javascript
- Nodejs
- Express
- MongoDB
- Mongoose
- Postman

## Como rodar a aplicação ❓

### Pré-requisitos

Para rodar essa aplicação você precisará antes instalar as seguintes ferramentas: 

- [Nodejs](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com)
- [Postman](https://www.postman.com) (uma recomendação para você testar as rotas)
- [VSCode](https://code.visualstudio.com/) (uma recomendação para você editar o código)
- [Git](https://git-scm.com/)

## Rodando a aplicação 💻

```bash
# Clone este repositório com o seguinte comando no seu terminal: 
$ git clone https://github.com/adson-SO/compassolisa.git

# Acesse a pasta do projeto pelo VSCode

# Instale as dependências do projeto com o comando:
npm install

# Execute a aplicação com o comando: 
npm start
```

## Testando as rotas 👨‍💻

Para usar as rotas você deve ser um usuário autenticado, portanto, antes de fazer suas requisições obtenha um token na rota de autenticação e informe o token na aba de autorização do Postman como um Bearer Token.

### POST - `http://localhost:3000/api/v1/car`

> Cadastrar carros

> Exemplo

```json
{
  "modelo": "GM S10 2.8",
  "cor": "branco",
  "ano": "2021",
  "acessorios": [
    { "descricao": "Ar-condicionado" },
    { "descricao": "Dir. Hidráulica" },
    { "descricao": "Cabine Dupla" },
    { "descricao": "Tração 4x4" },
    { "descricao": "4 portas" },
    { "descricao": "Diesel" },
    { "descricao": "Air bag" },
    { "descricao": "ABS" }
  ],
  "quantidadePassageiros": 5
}
```

### GET - `http://localhost:3000/api/v1/car`

> Listar todos os carros cadastrados

### GET - `http://localhost:3000/api/v1/car/:id`

> Buscar um carro específico através de seu ID

### PUT - `http://localhost:3000/api/v1/car/:id`

> Atualizar um carro específico através de seu ID

> Exemplo

```json
{
  "cor": "azul",
  "ano": "2019"
}
```

### DELETE - `http://localhost:3000/api/v1/car/:id`

> Deletar um carro através de seu ID

### PATCH - `http://localhost:3000/api/v1/car/:id/acessorios/:id`

> Atualizar um acessorio de um carro

> Exemplo

```json
{
  "descricao": "Ar-condicionado"
}
```

### POST - `http://localhost:3000/api/v1/people`

> Cadastrar uma pessoa

> Exemplo

```json
{
  "nome": "joaozinho ciclano",
  "cpf": "131.147.860-49",
  "data_nascimento": "03/03/2021",
  "email": "joazinho@email.com",
  "senha": "123456",
  "habilitado": "sim"
}
```

### GET - `http://localhost:3000/api/v1/people`

> Listar todas as pessoas cadastradas

### GET - `http://localhost:3000/api/v1/people/:id`

> Buscar uma pessoa específica pelo ID

### PUT - `http://localhost:3000/api/v1/people/:id`

> Atualizar uma pessoa específica pelo ID

> Exemplo

```json
{
  "data_nascimento": "04/03/2021",
  "habilitado": "não"
}
```

### DELETE - `http://localhost:3000/api/v1/people/:id`

> Deletar uma pessoa pelo seu ID

### POST - `http://localhost:3000/api/v1/authenticate`

> Rota para autenticar usuário

> Exemplo

```json
{
  "email": "joazinho@email.com",
  "senha": "123456"
}
```

### POST - `http://localhost:3000/api/v1/rental`

> Cadastrar uma locadora

>Exemplo

```json
{
  "nome": "Localiza Rent a Car",
  "cnpj": "16.670.085/0001-55",
  "atividades": "Aluguel de Carros E Gestão de Frotas",
  "endereco": [
    {
      "cep": "96200-200",
      "number":"1234",
      "isFilial": false
    }
  ]
}
```

### GET - `http://localhost:3000/api/v1/rental`

> Listar todas as locadoras

### GET - `http://localhost:3000/api/v1/rental/:id`

> Buscar uma locadora pelo seu ID

### PUT - `http://localhost:3000/api/v1/rental/:id`

> Atualizar uma locadora pelo seu ID

> Exemplo

```json
{
  "nome": "Localiza"
}
```

### DELETE - `http://localhost:3000/api/v1/rental/:id`

> Deletar uma locadora pelo seu ID 

## Swagger

Para acessar o swagger da api, primeiro inicie a aplicação e depois acesse o seguinte endereço em seu browser: http://localhost:3000/api/v1/api-docs/

## Deploy

Link da aplicação: https://api-compasslisa.herokuapp.com/

# 😊 Agradecimentos

- Felipe Silva
- Bruna Santos
- Gabriel Missio
- Thais Nicodemus
- Diego Bueno 
- Giovanni Hoffmann
