function conversaoCelcius(){
    let contadora = 1;
    let celcius = 10;
    let farenheit = 0;
    while(celcius<=100){
        farenheit = celcius*1.8+32
        console.log('Os graus em Celcius são' + celcius + '° e o valor em farenheit é' + farenheit)    
        celcius=celcius+10
}
}