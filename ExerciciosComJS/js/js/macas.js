function macas() {
let quantidade = Number (prompt('Digite a quantidade de maçãs: '))
   if ( quantidade < 12) {

      let calculo = quantidade * 1.30
      alert('Você deve pagar:R$ ' + calculo)

   }

   else { 
    
    let calculo2 = quantidade * 1.00
    alert('Você deve pagar:R$ ' + calculo2)

}

}
