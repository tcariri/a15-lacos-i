// Crie um array com 5 strings. Faça um programa que percorra este array e imprima as strings em formato de ranking, como no exemplo abaixo:

// ```jsx
// //entrada
// const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];

const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"]
console.log("Ranking")
for(let i=0;i<maioresPaises.length;i++){
    console.log(`\n ${i+1} - ${maioresPaises[i]}\n`)
}
