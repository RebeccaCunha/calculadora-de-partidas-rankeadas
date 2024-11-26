let resultado = vitorias(79, 50)
let nome = "Finn";
console.log(`O Herói ${nome}, tem o saldo de ${resultado.saldoRankeadas} e está o nível de ${resultado.nivel}!`)

function vitorias (num1, num2) {
    let saldoRankeadas = num1 - num2
    let nivel = " ";


    if (num1 < 10) {
        nivel = "Ferro";
    } else if (num1 >= 11 && num1 <= 20) {
        nivel = "Bronze";
    } else if (num1 >= 21 && num1 <= 50) {
        nivel = "Prata";
    } else if (num1 >= 51 && num1 <= 80) {
        nivel = "Ouro";
    } else if (num1 >= 81 && num1 <= 90) {
        nivel = "Diamante";
    } else if (num1 >= 91 && num1 <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    
    return {saldoRankeadas, nivel};
}
    