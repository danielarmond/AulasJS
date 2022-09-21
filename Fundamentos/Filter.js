const produtos = [
        {nome:'Note', preço: 2500},
        {nome:'Mouse', preço: 200},
        {nome:'teclado', preço:300}]

console.log(produtos.filter(function(p){
    return p.preço >1000

}))