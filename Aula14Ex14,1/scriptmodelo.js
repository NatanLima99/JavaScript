function calcular() {
    var inicio = document.getElementById(`txtinicio`);
    var fim = document.getElementById(`txtfim`);
    var passo = document.getElementById(`txtpasso`);
    var resultado = document.getElementById(`resultado`)

    if (inicio.value.length == 0 || passo.value.length == 0) {
        window.alert(`[ERRO] verifique os dados e tente novamente`)
    }else {
        resultado.innerHTML = `Contando:`
        var ini = Number(inicio.value)
        var fm = Number(fim.value)
        var pass = Number(passo.value)

        if (fm < ini) {
            for (var i = ini;i >= fm; i -= pass ){
                resultado.innerHTML += ` ${i} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }else {
            for (var i = ini; i <= fm; i += pass) {
                resultado.innerHTML += ` ${i} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`
        }
    }
}