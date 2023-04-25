function checarFaixaEtaria(idade) {
    if (idade <= 21) {
        return "Jovem";
    } else if (idade >= 22 && idade <= 65) {
        return "Adulto(a)";
    } else {
        return "Idoso(a)";
    }
}



//tambem poderia guardar o resultado em uma variavel e chamar a variavel no console.log


function apresentacao(nome, idade, altura, profissao) {
    let faixaEtaria = checarFaixaEtaria(idade)
    console.log(`Olá! Meu nome é ${nome}, sou um ${faixaEtaria} de ${idade} anos, ${altura}m de altura e sou ${profissao}.`)
}

apresentacao("Rochel", 20, 1.75, "Dev.software");