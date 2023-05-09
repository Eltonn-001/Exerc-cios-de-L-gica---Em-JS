// function aritmetica () {
// let nota1= Number (prompt('Digite a primeira nota: '))
// let nota2 = Number (prompt('Digite a segunda nota: '))
// let media = (nota1 + nota2 )/2

// if (media < 6 ) {

//  alert('A média do aluno é: ' + media + '\n O aluno está retido')

// }

// else {

//     alert('A média do aluno é: ' + media + '\n O aluno está aprovado')

// }

// }

// function idade() {

//    let anoNascimento = Number (prompt('Digite seu ano de nascimento: '))
//    let anoAtual = Number (prompt('Digite o ano atual: '))
//    let validacao = anoAtual - anoNascimento

//     if (validacao < 16) {

//       alert('Você ainda não pode votar')

//     }

//     else {  

//       alert("Você ja pode votar")

//     }


// }

function maiorOumenor () {

  let numero1 = Number (prompt('Digite um número: '))
  let numero2 = Number (prompt('Digite um segundo número: '))

  if (numero1 > numero2) {

    alert('O número ' + numero1 + ' é maior que ' + numero2)

  }

  else if ( numero2 == numero1){ 

      alert('O número ' + numero2 + ' é igual a  ' + numero1)

  }

  else {

     alert('O número ' + numero2 + ' é maior a ' + numero1)

  }

}