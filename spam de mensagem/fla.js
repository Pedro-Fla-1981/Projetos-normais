function send(){
    
        var msg2 = document.getElementById('msg')
        var vez = document.getElementById('vezes')
        var vezes = Number(vez.value)
        var res = document.getElementById('res')
        var msg = msg2.value
        var p = document.getElementById('p')
        
        if(msg2.value.length==0){
            alert('[ERRO],por favor preencher todos os dados')
        }else if(vez.value.length==0){
            alert('[ERRO],por favor preencher todos os dados')
        }else{
            p.innerHTML = ''
            for(var i = 1;i<=vezes;i++){
                p.innerHTML += `${i}- ` + `${msg}<br>`
                
            }
        }
    
}
