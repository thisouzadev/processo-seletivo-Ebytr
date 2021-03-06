## Tabela de Conteúdo

- [Sobre o Projeto](#sobre-o-projeto)
  - [Feito Com](#feito-com)
- [Começando](#come%C3%A7ando)
  - [Pré-requisitos](#pr%C3%A9-requisitos)
  - [Estrutura de Arquivos](#estrutura-de-arquivos)
  - [Instalação](#instala%C3%A7%C3%A3o)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Rest API](#rest-api)
- [Contato](#contato)

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.

### Feito Com

Abaixo segue o que foi utilizado na criação deste template:
- [Reactjs](https://reactjs.org/) - O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. 
- [MongoDb](https://www.mongodb.com/pt-br) - Os bancos de dados NoSQL vêm em uma variedade de tipos, incluindo bancos de dados de documentos, bancos de dados de valores-chave, armazenamentos de colunas amplas e bancos de dados de gráficos. MongoDB é o banco de dados NoSQL mais popular do mundo;
- [Node.js](https://nodejs.org/en/) - O Node. js se caracteriza como um ambiente de execução JavaScript. Com ele, o usuário pode criar aplicações sem depender do browser para isso;
- [Express](https://expressjs.com/pt-br/) - 
Express é um popular framework web estruturado, escrito em JavaScript que roda sobre o ambiente node. js em tempo de execução. Este módulo explica alguns dos principais benefícios deste framework, como configurar o seu ambiente de desenvolvimento e como executar tarefas comuns de desenvolvimento e implantação da web.


<!-- GETTING STARTED -->

## Começando

Para conseguir utilizar a API, através da sua IDE, siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações e uso da API, é ideal que você tenha o ambiente configurado para usar a API, para isso você deve instalar: <br /> 
1. MongoDB
2. NodeJs
3. NPM

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
backend
├── src/
│   ├── controllers/
│   │   ├── taskController.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── connection.js
│   │   ├── taskModel.js
│   ├── routes/
│   │   └── index.js
│   ├── services/
│   │   ├── taskService.js
│   ├── utils/
│   │   ├── dictionary/
│   │   │   └── statusCode.js
│   │   └── functions/
│   │       └── errorHandling.js
│   ├── index.js
├── tests/
|   ├── utils/
|   │   ├── mongoMockConnection.js 
│   └── 1-model.test.js
├── .dockerignore
├── .eslintrc.js
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package-lock.json
├── package.json
└── README.md
```

### Instalação

1. Para instalar e utilizar essa API o processo é bem simples, basta clonar o repositorio com o comando :

1. Clone o repositório

- `git clone git@github.com:thisouzadev/processo-seletivo-Ebytr.git`.
- Entre na pasta do repositório que você acabou de clonar:
  - `cd backend`

2. Instale as dependências

- `npm install`
 
3. rode a aplicação

- npm start


## Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/FeatureIncrivel`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!`)
5. Faça o Push da Branch (`git push origin feature/FeatureIncrivel`)
6. Abra uma Pull Request

<!-- rest API -->

## Rest API

1. cria a tarefa

post http://localhost:3000/task
{
	"status": "pendente",
	"task": "fazer um bolo"
}

2. pega todas as tarefas

GET http://localhost:3000/task

3. update na tarefa selecionada pelo id

PUT http://localhost:3000/task/:id
{
	"status": "andamento",
	"task": "bolo no forno"
}

4. pega a tarefa selecionada pelo id

GET http://localhost:3000/task/:id

5. delete a tarefa pelo id
 
DELETE http://localhost:3000/task:id

<!-- CONTACT -->

## Contato

github - https://github.com/thisouzadev
linkedin - https://www.linkedin.com/in/thisouzadev/


