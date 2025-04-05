function enviar(){
    var num = document.getElementById('num')
    var seltab = document.getElementById('seltab')
    var numb = document.getElementById('numb')
    if(num.value.length == 0){
        num.value = ''
        alert('Coloque um número')
    } else{
        seltab.innerHTML =''
        var num2 = Number(num.value)
        var numb2 = Number(numb.value)
        for(var i = 1;i<=numb2;i++){
            var option = document.createElement('option')
            option.innerHTML += `${num2} x ${i} = ${i*num2}`
            seltab.appendChild(option)
        }
    }
}