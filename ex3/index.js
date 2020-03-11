// criando um servidor

var http = require ("http")
http.createServer(function(requisicao, resposta){

    resposta.end("<h1 style='color:blue;' >Bem vindo </h1>")
//escolhendo a porta 3000
}).listen(3000);

// com isso crio o servidor
console.log("Meu servidor está rodando!")
//posso subir este código para um servidor e todo mundo poderia executar esse código
