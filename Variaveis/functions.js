// Como criar funções no node.js
function imprimaOla() {
    console.log("Olá, mundo!");
}

//Foi declarado uma função mas ela só ira funcionar caso seja chamada

imprimaOla();

//declarando funções com paramentros

function cumprimentar(pessoa, idade) {
    console.log(`Olá ${pessoa}, fiquei sabendo que vc tem ${idade} anos`);
}

cumprimentar("João", 24)