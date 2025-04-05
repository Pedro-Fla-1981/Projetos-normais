var lista = []
function limpar(){
    lista = []
    seltab.innerHTML = ''
}
function verificar(num2){
    if(lista.indexOf(num2) !== -1){
        return true
    } else{
        return false
    }
}
function enviar(){
    var num = document.getElementById('num')
    var seltab = document.getElementById('seltab')
    
    num2 = (num.value)
    if(num.value.length == 0){
        alert('Preencha os dados e tente novamente')
    } else if(verificar(num2)){
        alert('Valor já colocado')
    } else{
        
        var option = document.createElement('option')
        lista.push(num2)

        option.innerHTML += `${num2}`
        seltab.appendChild(option)

        
    }
    num.value = ''
}