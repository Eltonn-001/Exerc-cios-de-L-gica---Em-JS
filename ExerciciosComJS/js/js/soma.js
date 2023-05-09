// let numero = parseInt( prompt ('Digite um número:'))
// let numero2 = parseInt ( prompt ('Digite outro valor:'))
// let resultado = numero * numero2
// alert ('A soma dos  valores é:' + resultado)

function soma(a,b){
    let resultado=a+b
 document.getElementById('demo').innerHTML=resultado;
}

function somaDoisNumeros(){
    let numero = parseInt(prompt('Digite um número: '))
    let numero2 = parseInt (prompt('Digite o segundo número: '))
    let soma = numero + numero2;
    alert('A soma dos valores correponde a :' + soma)
}
    
function idade(){

    let idade= Number (prompt('Digite sua idade:'))

    if (idade>=18) {
        alert("Dropa no bailão vidoka")
    }
}