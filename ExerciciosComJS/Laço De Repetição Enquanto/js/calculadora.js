function calculadora() {
   let numero = parseInt(prompt('Digite um número:'))
   let contadora = 1;
   while (contadora<11) {
    let resultado = numero * contadora
    document.write (numero + '*' + contadora + '='+ resultado + "<br>")
    contadora ++
   }
}