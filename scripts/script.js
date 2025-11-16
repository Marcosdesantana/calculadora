let res = document.getElementById('res')
let valores = []
let soma = 0
let tipo = ''
function adicionar_valor(numero){
    
    res.innerText += numero

    if(typeof numero == 'number'){
       valores.push(numero)
    }else{
      tipo = ''
      tipo = numero
    }
}

function zerar_valor(){
   res.innerText = ''
   valores = []
}

function calcular_valor(){
    let soma = 0

   if(tipo == '+'){
      for(let c = 0 ; c < valores.length ; c++ ){
         soma += valores[c]
      }
      res.innerText = soma 
      valores = ''
      valores = []
      valores[0] = soma
      
   }

   if(tipo == 'x'){
      soma = 1
      for(let c = 0 ; c < valores.length ; c++ ){
         soma *= valores[c]
      }
      res.innerText = soma
      valores = ''
      valores = []
      valores[0] = soma
   }

   if(tipo == '%'){
      soma = valores[0]
      for(let c = 1 ; c < valores.length ; c++ ){
         soma /= valores[c]
      }
      res.innerText = soma
      valores = ''
      valores = []
      valores[0] = soma

   }

   if(tipo == '-'){
      soma = valores[0]
      for(let c = 1 ; c < valores.length ; c++ ){
         soma -= valores[c]
      }
      res.innerText = soma
      valores = ''
      valores = []
      valores[0] = soma

   }

}

function remover_valor(){
   let minha_sting 
   valores.pop()
   minha_sting = res.innerText
   let string_corrigida = minha_sting.slice(0, -1)
   res.innerText = string_corrigida
   
   
}