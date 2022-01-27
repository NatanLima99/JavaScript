function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_nascimento = document.getElementById("datanascimento")
    var res = document.getElementById("resultado")
    var img = document.createElement("img")
    img.setAttribute("id", "foto")

    if (ano_nascimento.value.length == 0 || ano_nascimento.value > ano_atual) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        var sexo = document.getElementsByName("radsex")
        var idade = ano_atual - Number(ano_nascimento.value)
        var genero = ""
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 1) {
                //bb
                img.setAttribute("src", "bbmacho.png")
            } else if (idade <= 15) {
                //criança
                img.setAttribute("src", "criancamacho.png")
            } else if (idade < 18) {
                //adolecente
                img.setAttribute("src", "adolecentemacho.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "adultomacho.png")
            } else {
                //vei
                img.setAttribute("src", "veimacho.png")
            }
        } else if (sexo[1].checked) {
            genero = "Mulher" 
            if (idade >= 0 && idade <= 1) {
                //bb
                img.setAttribute("src", "bbfemea.png")
            } else if (idade <= 15) {
                //criança
                img.setAttribute("src", "criancafemea.png")
            } else if (idade < 18) {
                //adolecente
                img.setAttribute("src", "adolecentefemea.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "adultofemea.png")
            } else {
                //vei
                img.setAttribute("src", "veafemea.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade}`
        res.style.textAlign = "Center"
        res.appendChild(img)
    }
}