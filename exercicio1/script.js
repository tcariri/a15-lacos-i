// Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

// Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.


let coxinha = prompt("deseja comer mais coxinha \nS em caso de sim\nN em caso de Não")
let conta = 0

while(coxinha==="s"){
    conta=conta+2.50
    coxinha=prompt("deseja comer mais coxinha \nS em caso de sim\nN em caso de Não")
}
console.log("o valor da sua conta é",conta)


