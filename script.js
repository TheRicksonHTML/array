//var, let e const = variaveis
// variaveis serve para armazenar imformacoes 

let nome = "Rickson";
// string é um tipo de dado textual
//console.log(nome);

// array [] colchetes 
//array lista é uma variavel especial onde podemos armazenar uma lista de dados 

let compras = [
    "celular",
    "miojo",
    "RTX 4090",
    "Pizza",
    "Biscoito",
    "coca-cola",
    "perfumes",
    "carro",
    "energetico",
    "cafe",
    "roupas",
    "pré treino",
];
// no array temos um indice, vai iniciar do numero 0
//console.log(compras)// mostra toda a lista
//console.lo(compras[5])

let numeros = [
    1, 2, 3, 4, 5]
    console.log(numeros);

    // metodos de array
    // forma de manipular dados 

    // adicionando o numero 6 no array

    numeros.push(6)
    //push() adiciona/empurra no final do array

    numeros.unshift(0);
    //adiciona ao inicio do array

    numeros.pop();
    //vai remover o ultimo item do array

    console.log(numeros.join("-"))