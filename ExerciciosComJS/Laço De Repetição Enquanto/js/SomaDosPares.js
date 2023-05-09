function SomaDosPares() {
    let soma = 0;
    let contadora = 1;
    while (contadora<501) {
        if (contadora%2==0) {
            soma += contadora;
        }
        contadora ++
    }
    alert('A soma de todos os pares é :' + soma)
}