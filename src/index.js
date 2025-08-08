// Desafio "Classificador de nível de Herói"
// Objetivo: Criar uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói;
// Em seguida, utilizar uma estrutura de decisão para apresentar uma mensagem de classificação em: ferro, bronze, prata, ouro, platina, ascendente, imortal ou radiante.
//O que será utilizado: variáves, operadores, laços de repetição e estruturas de decisão
// Saída: Ao final deve se exibir uma mensagem:
// "O herói de nome **(nome)** está no nível de **(nível)**"

let nomeHeroi = "Apollo";
let xpHeroi = 7500;  // O nível do herói está entre 7001 e 8000, portanto o elo será "Platina"
let nivelHeroi = 5;  // Nìvel do herói definido como 5
let eloHeroi = ""; // Variável para armazenar o elo do herói

if (xpHeroi <= 1000) {  // Utilizei o operador lógico "<=" para definir que caso o XP do herói seja menor ou igual a 1000, o elo será "Ferro"
    eloHeroi = "Ferro";

} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {  // Utilizei o operador lógico "&&" para definir o intervalo de XP entre 1001 e 2000
    eloHeroi = "Bronze";

} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    eloHeroi = "Prata";

} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    eloHeroi = "Ouro";

} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    eloHeroi = "Platina";

} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    eloHeroi = "Ascendente";

}else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    eloHeroi = "Imortal";

} else if (xpHeroi >= 10001) {
    eloHeroi = "Radiante";
}   

let resultadoDivisao = xpHeroi / nivelHeroi;  // Nesse bloco, caso a divisão do XP do herói pelo seu nível seja maior que 1000, o herói poderá usar uma armadura especial
let PodeUsarArmaduraEspecial = false;        

if (resultadoDivisao > 1000) {    
    PodeUsarArmaduraEspecial = true;
}

if (PodeUsarArmaduraEspecial) {
    console.log("O herói " + nomeHeroi + " pode usar a armadura especial.");
} else {
    console.log("O herói " + nomeHeroi + " NÃO pode usar a armadura especial.");
}


if (xpHeroi <= 3000) { // Verifica de acordo com a quantidade de XP do herói, qual mundo ele pode acessar
    console.log("O herói " + nomeHeroi + " pode acessar o mundo de Gaia, que é o mundo da terra.");

} else if (xpHeroi >= 3001 && xpHeroi <= 4000) {
    console.log("O herói " + nomeHeroi + " pode acessar o mundo de Mundo inferior e Primordial, que é o mundo dos mortos e das forças primordiais.");

} else if (xpHeroi >= 4001 && xpHeroi <= 5000) {
    console.log("O herói " + nomeHeroi + " pode acessar o mundo de Reino de Hades, O Submundo, que é o mundo dos mortos.");

} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    console.log("O herói " + nomeHeroi + " pode acessar o mundo de Reino de Poseidon, que é o mundo dos mares e oceanos.");

} else if (xpHeroi >= 8001) {
    console.log("O herói " + nomeHeroi + " pode acessar o mundo de Olimpo, que é o mundo dos deuses.");

} else if (xpHeroi <= 0) {
    console.log("O herói " + nomeHeroi + " não tem acesso a nenhum mundo.");
}   

// Utilizando a estrutura switch para determinar qual armamento o herói pode acessar de acordo com o cenário
let mundoAcessivel = "Reino de Posseidon"; // Variável para armazenar o mundo acessível ao herói
let armasAcessiveis = "Reino de Posseidon"; // Variável para armazenar o armamento que o herói pode acessar de acordo com o cenário
switch (armasAcessiveis){
    case "Gaia":
        console.log("O herói " + nomeHeroi + " pode utilizar apenas a espada de Gaia.");
        break;

    case "Mundo inferior e Primordial":
        console.log("O herói " + nomeHeroi + " pode utilizar apenas as lâminas de Triton.");
        break;  

    case "Reino de Hades, O Submundo":
        console.log("O herói " + nomeHeroi + " pode utilizar apenas as lâminas de Hades.");
        break;  

    case "Reino de Posseidon":
        console.log("O herói " + nomeHeroi + " pode utilizar apenas o Tridente de Poseidon.");
        break;

    case "Olimpo":
        console.log("O herói " + nomeHeroi + " pode utilizar apenas o raio de Zeus.");
        break;

    default: // Caso o herói não tenha acesso a nenhum mundo
        console.log("O herói " + nomeHeroi + " não tem acesso a nenhum mundo.");
        break;
}

// Simulando o tempo de inatividade do herói
// O herói será desconectado da sessão após mais de 10 segundos de inatividade
    for (let i = 0; i <= 11; i++) { 
    if (i > 10) {
        console.log("O herói " + nomeHeroi + " foi desconectado da sessão por inatividade.");
        break; 
    } else {
        console.log("Tempo de inatividade: " + i + " segundos.");
    }
}

// Exibindo a mensagem final com o nome do herói e seu nível
console.log("O herói " + nomeHeroi + " está no nível " + nivelHeroi + " e no elo " + eloHeroi + ".");