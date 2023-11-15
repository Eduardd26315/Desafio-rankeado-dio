function calcularNivel(quantiaDeVitorias) {
    let nivel;

    if (quantiaDeVitorias < 10) {
        nivel = "Ferro";
    } else if (quantiaDeVitorias >= 11 && quantiaDeVitorias <= 20) {
        nivel = "Bronze";
    } else if (quantiaDeVitorias >= 21 && quantiaDeVitorias <= 50) {
        nivel = "Prata";
    } else if (quantiaDeVitorias >= 51 && quantiaDeVitorias <= 80) {
        nivel = "Ouro";
    } else if (quantiaDeVitorias >= 81 && quantiaDeVitorias <= 90) {
        nivel = "Diamante";
    } else if (quantiaDeVitorias >= 91 && quantiaDeVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}

function obterQuantiaDeVitorias() {
    let quantiaDeVitorias;

    while (true) {
        quantiaDeVitorias = Number(prompt("Qual é o seu número de vitórias?"));

        if (!isNaN(quantiaDeVitorias) && Number.isInteger(quantiaDeVitorias) && quantiaDeVitorias > 0) {
            break;
        } else {
            alert("Por favor, insira um valor numérico inteiro e positivo válido para o número de vitórias.");
        }
    }

    return quantiaDeVitorias;
}
let vitorias = obterQuantiaDeVitorias();
let nivel = calcularNivel(vitorias);
alert("O Herói com " + vitorias + " vitórias está no nível " + nivel);
















