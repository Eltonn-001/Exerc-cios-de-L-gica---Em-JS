function fibonacci () {
    let contadora = 1;
    let numeroAtual = 1;
    let numeroAntecessor = 0;
    let soma = 0;
    console.log(numeroAtual);
    while(contadora<15){
        soma=numeroAtual+numeroAntecessor;
        console.log(soma);
        numeroAntecessor=numeroAtual;
        numeroAtual=soma;
        contadora++

    }
}