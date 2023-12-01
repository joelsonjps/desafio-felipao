//Criação da variável para armazenar o nome e XP do herói

let heroi = "Joelson"
let xpHeroi = 1.000 //subtitua com a quantidade real XP do herói

//Utilização de estrutura de decisão para determinar o nivel
let nivel

if (xpHeroi <= 1.000) {
   
    nivel = "Ferro"

} else if (xpHeroi >= 1.001 && xpHeroi <= 2.000){
    
    nivel = "Bronze"
   
} else if (xpHeroi >= 2.001 && xpHeroi <= 5.000 ) {
    
    nivel = "Prata"

} else if (xpHeroi >= 6.001 && xpHeroi <= 7.000){

    nivel = "Ouro"

} else if (xpHeroi >= 7.001 && xpHeroi <= 8.000){

    nivel = "Platina"

} else if (xpHeroi >= 8.001 && xpHeroi <= 9.000){

    nivel = "Ascendente"

} else if (xpHeroi >= 9.001 && xpHeroi <= 10.000){

    nivel = "Imortal"

} else if (xpHeroi >= 10.001){

    nivel = "Radiante"

}
//Exibição da mensabem
console.log ("O Heroi de nome " + heroi + " está no nivel de " + nivel)
    