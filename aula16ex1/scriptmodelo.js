let numero = document.getElementById(`txtnumber`)
let tab = document.getElementById(`settab`)
let resultado = document.getElementById(`resultado`)
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        let item = document.createElement(`option`)
        item.text = `valor ${numero.value} adicionado`
        tab.appendChild(item)
    } else {
        (window.alert(`[ERRO] Valor invalido ou ja encontrado na lista.`))
    }
    numero.value = ""
    numero.focus()
    resultado.innerHTML = ""
}

function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione valores antes de finalizar`)
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / total
        resultado.innerHTML = ``
        resultado.innerHTML += `<p>O total de valores é: ${total}</p>`
        resultado.innerHTML += `<p>O maior valor é: ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor é: ${menor}</p>`
        resultado.innerHTML += `<p>A soma dos valor é: ${soma}</p>`
        resultado.innerHTML += `<p>A media dos valor é: ${media}</p>`
    }
}