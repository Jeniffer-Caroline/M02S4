//Crie um objeto contador com uma propriedade 'valor' inicializada em 0;:

const contador = {
    valor:0

}
//Crie o métodos incrementar(), decrementar() e mostrarValor(); Onde:
// O método incrementar(): soma +1 ao valor;
//O método decrementar(): subtrai -1 do valor;
// O método mostrarValor(): exibe a mensagem no console: ‘O valor atual é {valor}’;

contador.incrementar = function () {
    this.valor++;
}
contador.decrementar = function () {
    this.valor--;
}
contador.mostrarValor = function () {
    console.log(`O valor atual é ${this.valor}` );
}
contador.incrementar();
contador.decrementar();
contador.mostrarValor();

