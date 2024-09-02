# Easyjur Valida ISBN-10

Este projeto contém uma função JavaScript para validar números ISBN-10, junto com um conjunto de testes unitários usando Jasmine.

## Sobre

Este repositório contém a função `isValidISBN10`, que verifica se uma string fornecida é um ISBN-10 válido. ISBN-10 é um identificador único para livros, que consiste de 10 caracteres, podendo incluir dígitos e um 'X' como dígito de verificação.

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 12 ou superior).
- npm (geralmente instalado junto com o Node.js).

## Instalação

Siga os passos abaixo para configurar o ambiente do projeto:

1. Clone o repositório:

   ```bash
   git clone git@github.com:adomoraes/easyjur.git
   ```

2. Trocar para a branch da task:

   ```bash
   git checkout easyjur/task-03
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Uso

A função `isValidISBN10` está localizada no arquivo `src/isbn.js`. Você pode importá-la e utilizá-la em outros scripts JavaScript conforme necessário.

Exemplo de uso:

```javascript
const isValidISBN10 = require("./src/isbn.js")

const isbn = "0471958697"
if (isValidISBN10(isbn)) {
	console.log(`${isbn} é um ISBN-10 válido.`)
} else {
	console.log(`${isbn} não é um ISBN-10 válido.`)
}
```

## Testes

Este projeto utiliza o framework de testes Jasmine para garantir a qualidade da função isValidISBN10. Para rodar os testes, siga os passos abaixo:

Certifique-se de que todas as dependências estejam instaladas (conforme descrito na seção de instalação).

Execute os testes com o comando:

```bash
npm test
```

## Estrutura do Projeto

```
├── /src
│ └── isbn.js (arquivo contendo a função isValidISBN10)
├── /spec
│ ├── /support
│ │ └── jasmine.json (arquivo de configuração do Jasmine)
│ └── isbnSpec.js (arquivo contendo os testes Jasmine)
└── package.json
```
