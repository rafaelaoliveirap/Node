// console.log ("Olá mundo!")

/*criar a identidade do projeto
- npm init (observar que foi criado o arquivo package.json - javascript object notation - que contém informações do projeto)
- instalar o framework node -> express
executar o comando: npm install express*/

let express = require('express') //importando o modulo express
let app = express()
let port = 8081

app.get('/', (req,res)=>{
    res.send('<h1>home</h1>')
})
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
