const dadosPessoais = {nome: 'Lucas', idade: 30};
const endereco = {cidade: 'São Paulo', estado: 'SP'};

//Utilizando o operador spread para mesclar os objetos:

const  pessoa = {...dadosPessoais, ...endereco};

console.log(pessoa);