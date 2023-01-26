const menor = 1
const maior = 100

const numSecreto = gerarNum()


const elMenor = document.querySelector("#menor-valor")
const elMaior = document.querySelector("#maior-valor")
elMenor.innerHTML = menor
elMaior.innerHTML = maior

console.log(numSecreto)

function gerarNum(){
    return parseInt(Math.random() * maior + 1)
}