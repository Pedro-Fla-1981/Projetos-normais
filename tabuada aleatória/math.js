    var h1 = document.getElementById('h1')
    
    var multiplicando = Math.floor(Math.random()*10)
    var multiplicador = Math.floor(Math.random()*10)
    var pont = document.getElementById('pont')
    var pontuação = 0
    
function tab(){

    h1.innerText = `${multiplicando} x ${multiplicador}`
}

function enviar(){
    var sm = document.getElementById('sm')
    var num = document.getElementById('num')
    

    if(num.value.length == 0){
        alert('RESPONDA!!!')
    } else{
        var num2 = Number(num.value) 
        
            if(num2 == multiplicando * multiplicador){
                sm.innerText = 'Resposta certa'
                pontuação ++
                pont.innerHTML = `${pontuação}`
            } else{
                sm.innerText = 'Resposta errada'
            }
        
            if(pontuação == 10){
                pont.innerHTML = `${pontuação} Parabéns,você fez 10 pontos`
            }
            multiplicando = Math.floor(Math.random()*10)
            multiplicador = Math.floor(Math.random()*10)
            h1.innerText = `${multiplicando} x ${multiplicador}`
    }
    num.value = ''
}
