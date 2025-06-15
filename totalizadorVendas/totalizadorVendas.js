const vendas =[
    {produto: 'Notebook', valor: 2500},
    {produto: 'Monitor', valor: 1200},
    {produto: 'Teclado', valor: 250}
];

//utilizando for eatch para exibir uma mensagem com o nome e o valor de cada item vendido:

for (const venda of vendas ) {
    console.log(`O produto ${venda.produto}` + ` foi vendido por ${venda.valor}`);

}

//calcular e exibir o valor total de vendas:

let totalVendas = 0;
for (const venda of vendas){
    totalVendas += venda.valor;
}
console.log(`O total de vendas foi de ${totalVendas}`);
