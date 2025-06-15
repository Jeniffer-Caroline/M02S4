const dados = {
    nome: 'João',
    idade: null,
    cidade: 'São Paulo',
    email:  undefined
};

//Removendo do objeto as propriedades cujo valor seja null e undefined:

const dadosLimpos = {...dados };

delete dadosLimpos.idade;
delete dadosLimpos.email;

//Coloque no console o objeto atualizado:

console.log(dadosLimpos);