/* 

Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando telefones -dica: loop!- até você ficar sem dinheiro na sua conta bancária. Você irá também comprar acessórios para cada telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal. OK

Após calcular o valor da compra, adicione as taxas, depois imprima a quantidade total, devidamente formatada. OK

Por fim, verifique o total gasto em sua conta bancária para saber se você pode comprar ou não. OK

Você deve definir algumas constantes para a "taxa de imposto", "preço do telefone", "preço do acessório", e "limite de gastos", assim como variáveis para o seu "saldo bancário".OK

Você deve definir funções para calcular a taxa e para formatar o preço com um "$" e arredondá-lo para duas casas decimais. OK

Desafio Extra: Tente incorporar um input para esse programa, talvez com oprompt(..) que abordamos anteriormente em "Input". Você pode definir um prompt para o usuário para definir o saldo de sua conta bancária, por exemplo. Divirta-se e seja criativo! 

*/

function calculoDaTaxa(valorTotalDaCompra, taxaDeImposto){
    return valorTotalDaCompra * taxaDeImposto    
}

function precoFormatado(valor){
    return "$" + valor.toFixed(2)
}

var valorCelular = 99.99
var saldoDaConta = 780.00
var taxaDeImposto = 0.07
var valorAcessorio = 4.99
var limiteDeGasto = 365.50

var valorTotalDaCompra = 0

var quantidadeDeCelular = 0
var quantidadeDeAcessorio = 0

while(valorTotalDaCompra < saldoDaConta){
    valorTotalDaCompra += valorCelular
    quantidadeDeCelular++

    if(valorTotalDaCompra < limiteDeGasto){
        valorTotalDaCompra += valorAcessorio
        quantidadeDeAcessorio++
    }
}

valorTotalDaCompra += calculoDaTaxa(valorTotalDaCompra, taxaDeImposto)

if(valorTotalDaCompra > saldoDaConta){
    console.log("Não autorizado")
} else{ console.log("Compra autorizada")}

console.log("Quantidade de celular(es): " + quantidadeDeCelular)
console.log("Quantidade de acessório(s): " + quantidadeDeAcessorio)
console.log("Valor total da compra: " + precoFormatado(valorTotalDaCompra))
console.log("Saldo em conta: " + precoFormatado(saldoDaConta))