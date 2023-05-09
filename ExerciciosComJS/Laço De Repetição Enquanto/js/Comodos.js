function comodos () {
    let loop = true;
    let areaTotal = 0;
    let comodosTotal = 0;
    while (loop==true) {

        let comodo = prompt('Digite o nome do cômodo: ')
        let largura = Number (prompt('Digite a largura do cômodo: '))
        let comprimento = Number (prompt('Digite o comprimento do cômodo: '))
        let area = largura * comprimento
        areaTotal += area 
        comodosTotal += 1
        alert ("A area do cômodo " + comodo + "é dê " + area + "m2")
        
        let escolha = prompt('Você deseja continuar (S) sim, (N) não: ')

        switch (escolha) {
            case  'S': 
            break;
            case 'N':
            loop = false;
            break;
            default: 
            break;
        }
        
        
    }

    alert('A quantidade de cômodos é: '+ comodosTotal + ' E a area total do ' + areaTotal)

}


// Ari mais simples
// function comodo() {
//     let area = 0;
//     let areaTotal = 0;
//     let resposta = 'S';
//     while (resposta != "N") {
//         let nome = (prompt('Digite o nome do cômodo'));
//         let largura = parseInt(prompt('Digite a largura do cômodo'));
//         let comprimento = parseInt(prompt('Digite o comprimento do cômodo'));
//         area = largura * comprimento
//         areaTotal = areaTotal + area
//         alert("A área do " + nome + " é de " + area + " m².")
//         resposta = (prompt('Deseja adicionar mais um cômodo S/N'));
//     }
//     alert("A área total da residência é de: " + areaTotal + " m².")
// }
// }




// GUI com if
// function comodos() {
//     let areaTotal = 0;
//     while (true) {
//       let nome = prompt("Digite o nome do cômodo:");
//       let largura = Number(prompt("Digite a largura do cômodo em metros:"));
//       let comprimento = Number(
//         prompt("Digite o comprimento do cômodo em metros:")
//       );
//       let area = largura * comprimento;
//       alert(`A área do cômodo ${nome} é ${area} metros quadrados.`);
//       areaTotal += area;
//       let continuar = prompt(
//         "Deseja calcular a área de mais um cômodo? Digite SIM ou NAO."
//       );
//       if (continuar.toUpperCase() !== "SIM") {
//         break;
//       }
//     }
//     alert(`A área total da residência é ${areaTotal} metros quadrados.`);
//   }