function gerar(num){
    var num = document.getElementById(`txtnumero`)
    var tab = document.getElementById(`seltab`)
    var resultado = document.getElementById(`resultado`)

    if (num.value.length == 0){
        window.alert(`[ERRO] Por favor digite um numero`)
    }else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ""
        while (c <= 10) {
            var item = document.createElement(`option`)
            item.text = `${n} * ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}