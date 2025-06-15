
const produtos = [
    {nome: 'Notebook', marca: 'Dell', cor: 'preto', tamanho: '15 polegadas'},
    {nome: 'Monitor', marca: 'Samsung', cor: 'preto', tamanho: '24 polegadas'},
    {nome: 'Teclado', marca: 'Dell', cor: 'preto', tamanho: '15 polegadas'},
    {nome: 'Mouse', marca: 'Dell', cor: 'preto', tamanho: '15 polegadas'},
    {nome: 'Mousepad', marca: 'Dell', cor: 'preto', tamanho: '15 polegadas'}
];

const valores = ['Dell', 'Preto', '15polegadas'];


    function filtroDinamico(lista, propriedades, valores) {
    return lista.filter((elemento) => {
        for (let i = 0; i < propriedades.lenght; i++){
        if (elemento[propriedades[i]]!== valores[i]){
            return false;
        }
    }
return true;
});
}





const resultado = filtroDinamico(produtos, produtos, valores);
console.log(resultado);

