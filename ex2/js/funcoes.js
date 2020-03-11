 const titulo = "Generation-Node js"
 
 //invocando a funcao nomeMaiusculo
 
 function nomeMaiusculo(nome){
    return nome.toUpperCase()
}
     

 //invocando a funcao nomeMinusculo
 function nomeMinusculo(nome){
    return nome.toLowerCase()
    
 }
 


 function totalLetras(nome){
   var total = nome.length
   return "O total de letras é " + total
 }

 // para que as funções fiquem acessíveis para outro codigo deve-se exportar

module.exports = {
    nomeMaiusculo,
    nomeMinusculo,
    totalLetras, 
    titulo
 }
