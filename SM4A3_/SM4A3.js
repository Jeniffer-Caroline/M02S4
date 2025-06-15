/*const aluno= { 
       nome: 'Lucas',
    turma: 'Turma 1',
    nota: 5
 
};

for (let i in aluno) {
    console.log('propriedade: ', i, propriedade);
    console.log('valor: ', aluno[propriedade]);
}*/
/*____________________________________________________________________________________________________________*/
/*
//Crie um objeto que pussua as propriedades de um cadastro de um novo usuário em um sistema:
const cadastro = {
    nome: 'Lucas',
    idade: 30,
    cidade: 'Sao Paulo',
    email: 'lucas@sp.com'
};

//exiba no console, dinamicamente, a quantidade de propriedades desse objeto:
let contador = 0;
for (let i in cadastro) {
    
    console.log(`propriedade ${contador}: ${i}`);

contador++;
}
    console.log('Total de propriedades:', contador);*/

    /*_______________________________________________________________________________________________________*/
/*
 //Crie um objeto chamado carro:

 const carro ={
    marca: 'Toyota',
    modelo: 'Corolla',
    ano: 2020
 };

 //adicione um mértodo chamado descricao() que retorne a string "Carro: [marca] [modelo] [ano]:



 carro.descricao = function() {
 
       return `carro: ${this.marca } ${this.modelo} ${this.ano} `


 }
console.log(carro.descricao( ));*/
/*_______________________________________________________________________________________________________*/
/*function funcaoDois() {
    console.log('funcaoDois: Olá ', saudacao );
}
function funcaoUm(){
    saudacao = 'Mundo';
    funcaoDois();

}

funcaoUm();
funcaoDois();

const somaDoisNumeros = (a, b) => {
    return a + b
     
}

console.log(somaDoisNumeros(1, 2));

*/
/*____________________________________________________________________________________________________*/
/*
//crie uma funcao chamada quadrado:
//esta função receberá como parametro um numero e ddeverá retornar o quadrado deste numero:
//Antes de realizar o cálculo valide se o parâmetro passado é numérico. se for, realize o calculo, se nao exiba a mensagem 'Parametro incorreto":

const quadrado = (a) => {
    if (typeof a === 'number'){
        return a * a;
    }else{
        return 'Parametro incorreto';
    }
    }
    console.log('quadrado:',quadrado (5));
    console.log(quadrado ('5'));*/
    /*_--------------------------------------------------------------------------------------------------------------------*/
    /*
    //Crie uma função que receba um array de strings contrendo nomes:

    const nomes = ['Lucas', 'Maira', 'Joao', 'Maria'];
    //retorne desta função um array de objetos onde cada objeto do array deverá conter as propriedades 'id' e 'nome', sendo o valor do 'id' um identificador numérico único começando em 1 eo valor do 'nome' o item passado no array:

    const nomesObjetos = nomes.map((nome, index )=> {
        return{
            id: index + 1,
            nome 

        }
    }) 
    console.log(nomesObjetos);*/






