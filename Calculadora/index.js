var funcoes = require("../Calculadora/js/funcoes")
const express = require('express');
const app = express()
let port = 8081
let n1 = 4
let n2 = 2

//send é uma função do express
// end é uma função do http

app.get('/', (requisicao, resposta)=>{
resposta.send ("<h1 style= 'color:violet; background-color: pink; text-align:center' > Calculadora </h1>" + "A soma é " + funcoes.soma(n1,n2))
})
app.listen(port, function () {
    console.log('Servidor rodando em http://localhost?${port}')
    console.log ("App rodando!")
})

// var Soma = funcoes.soma(n1,n2)
// console.log (Soma)

// var Sub = funcoes.subtracao(n1,n2)
// console.log (Sub)

// var Mult = funcoes.multiplicacao(n1,n2)
// console.log(Mult)

// var Div = funcoes.divisao(n1,n2)
// console.log (Div)
