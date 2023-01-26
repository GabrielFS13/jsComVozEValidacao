function verificarChute(chute){
    const num = +chute

    if(Number.isNaN(num)){
       elChute.innerHTML += `<div>Valor inválido</div>`
       return
    }
    if(maiorQuePermitido(num)){
        elChute.innerHTML += `O número secreto tem que estar entre ${menor} e ${maior}`
        return
    }

    if(chute == numSecreto){
        document.body.innerHTML = `
            <h2>Você acertou!!!</h2>
            <h3> O número era ${numSecreto} </h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(chute > numSecreto){
        elChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-sharp fa-solid fa-angle-down"></i></div>
        `
    } else{
        elChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-sharp fa-solid fa-angle-up"></i></div>
        `
    }

}


function maiorQuePermitido(n){
    return  n < menor || n > maior
}

document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})