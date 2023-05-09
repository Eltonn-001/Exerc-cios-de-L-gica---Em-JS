function potenciaUser(){
    let base=Number(prompt('Escreva a base da operação:'));
    let potencia=Number(prompt('Escreva a exponenciação da operação:'));
    let contadora=1;
    let resultado=1;
    while(contadora<=potencia){
        resultado = resultado*base;
        contadora++
    }
    console.log(resultado)
}
