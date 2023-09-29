/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

let nomeHeroi 
let quantidadeXP
let nivelHeroi 
const menssagem = "O Herói de nome" + nomeHeroi + "está no nível " + nivelHeroi

if (quantidadeXP <1.000) {
    nivelHeroi= "Bronze"
    console.log (menssagem)
}  else if ((quantidadeXP >=1.001) && (quantidadeXP <=2.000)) {
    nivelHeroi = "Ferro"
    console.log (menssagem)
} else if ((quantidadeXP >=2.001) && (quantidadeXP <=5.000)) {
    nivelHeroi = "Prata"
    console.log (menssagem)
} else if ((quantidadeXP >=6.001) && (quantidadeXP <=7.000)) {
    nivelHeroi = "Ouro"
    console.log (menssagem)
} else if ((quantidadeXP >=7.001) && (quantidadeXP <=8.000)) {
    nivelHeroi = "Platina"
    console.log (menssagem)
} else if ((quantidadeXP >=8.001) && (quantidadeXP <=9.000)) {
    nivelHeroi = "Ascendente"
    console.log (menssagem)
}  else if ((quantidadeXP >=9.001) && (quantidadeXP <=10.000)) {
    nivelHeroi = "Imortal"
    console.log (menssagem)
} else {
    nivelHeroi = "Radiante"
    console.log (menssagem)
}



