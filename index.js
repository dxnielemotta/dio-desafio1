/*Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante */

let nomeHeroi = "Sova"
let quantidadeXP = 5000
let nivelHeroi = ["Bronze", "Ferro", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
const menssagem = "O Herói de nome " + nomeHeroi + " está no nível "

if (quantidadeXP <1000) {
    nivelHeroi= "Bronze"
    console.log (menssagem + nivelHeroi)
}  else if ((quantidadeXP >=1001) && (quantidadeXP <=2000)) {
    nivelHeroi = "Ferro"
    console.log (menssagem +nivelHeroi)
} else if ((quantidadeXP >=2001) && (quantidadeXP <=5000)) {
    nivelHeroi = "Prata"
    console.log (menssagem + nivelHeroi)
} else if ((quantidadeXP >=6001) && (quantidadeXP <=7000)) {
    nivelHeroi = "Ouro"
    console.log (menssagem + nivelHeroi)
} else if ((quantidadeXP >=7001) && (quantidadeXP <=8000)) {
    nivelHeroi = "Platina"
    console.log (menssagem + nivelHeroi)
} else if ((quantidadeXP >=8001) && (quantidadeXP <=9000)) {
    nivelHeroi = "Ascendente"
    console.log (menssagem + nivelHeroi)
}  else if ((quantidadeXP >=9001) && (quantidadeXP <=10000)) {
    nivelHeroi = "Imortal"
    console.log (menssagem + nivelHeroi)
} else {
    nivelHeroi = "Radiante"
    console.log (menssagem + nivelHeroi)
}



