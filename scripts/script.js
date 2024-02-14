// carne - 400gr por pessoa + de 6h - 650gr por pessoa
// cerveja - 1200ml por pessoa + 6h - 2000ml por pessoa
// refrigerante - 1000ml por pessoa + de 6h - 1500ml    
// criança vale por 0,5 

let inputHomens = document.getElementById("homens");
let inputMulheres = document.getElementById("mulheres");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let homens = inputHomens.value;
    let mulheres = inputMulheres.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarneH = carnePP (duracao) * homens; 
    let qtdTotalCarneM = carnePP (duracao)/1.5 * mulheres;
    let qtdTotalCarneC = carnePP (duracao)/2 * criancas;
    let qtdTotalCervejaH = cervejaPP (duracao) * homens; 
    let qtdTotalCervejaM = cervejaPP (duracao)/2 * mulheres; 
    let qtdTotalBebidasH = bebidasPP (duracao)/1.5 * homens; 
    let qtdTotalBebidasM = bebidasPP (duracao)/2 * mulheres; 
    let qtdTotalBebidasC = bebidasPP (duracao)/2 * criancas; 


    resultado.innerHTML = `<p>Para essa quantidade de pessoas será necessário comprar ${Math.ceil(qtdTotalCarneH/1000 + qtdTotalCarneM/1000 + qtdTotalCarneC/1000)}kg de carne podendo variar entre carne, linguiça e frango. Poderá também servir acompanhamentos tradicionais para churrasco como arroz, farofa, vinagrete, maionese de batatas e saladas variadas.</p>`
    resultado.innerHTML += `<p>Se desejar servir bebidas alcoólicas você poderá comprar ${Math.ceil(qtdTotalCervejaH/355 + qtdTotalCervejaM/355)} latas de cerveja para os adultos.</p>`
    resultado.innerHTML += `<p>Com relação as demais bebidas poderá comprar ${Math.ceil(qtdTotalBebidasH/2000 + qtdTotalBebidasM/2000 + qtdTotalBebidasC/2000)} pet's 2L de refrigerantes, podendo fazer a troca de parte dessa quantidade por água mineral e sucos.</p>`
}



function carnePP (duracao){
    if(duracao >= 6) {
        return 650;
    }   else {
        return 400;
    }
}

function cervejaPP (duracao){
    if(duracao >= 6) {
        return 2000;
    }   else {
        return 1200;
    }
}

function bebidasPP (duracao){
    if(duracao >= 6) {
        return 1500;
    }   else {
        return 1000;
    }
}

function recarregarAPagina(){
    window.location.reload();
} 