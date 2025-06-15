const produtos = [
    {nome: 'Notebook', estoque: 4 },
    {nome: 'Monitor', estoque: 0 },
    {nome: 'Teclado', estoque: 2 },
    {nome: 'Mouse', estoque: 0 }
];

//apenas produtos que estao em (estoque > 0) e exibir o array atualizado 

const produtosEmEstoque = produtos.filter(produtos => produtos.estoque > 0);

console.log(produtosEmEstoque);