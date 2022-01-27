function verificar() {
    var data = new Date()
    var data_atual = data.getFullYear()
    var data_de_nascimento = window.document.getElementById("data_nascimento")
    var sexo = window.document.getElementsByName("rad_sexo")
    var mensagem = window.document.getElementById("resultado")
    var img = window.document.createElement("img")
    img.setAttribute("id","foto")

    if (data_de_nascimento.value.length == 0 || data_de_nascimento.value > data_atual) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
    } else {
        var idade = data_atual - Number(data_de_nascimento.value)
        var geneno = ""
        if (sexo[0].checked) {
            geneno = "Homem"
            if (idade <= 1 ){
                img.setAttribute("src","bbmacho.png")
            } else if (idade <= 12) {
                img.setAttribute("src", "criancamacho.png")
            } else if (idade <= 18) {
                img.setAttribute("src", "adolecentemacho.png")
            } else if (idade <= 50) {
                img.setAttribute("src", "adultomacho.png")
            } else {
                img.setAttribute("src", "veimacho.png")
            }

        } else if (sexo[1].checked) {
            geneno = "Mulher"
            if (idade <= 1 ){
                img.setAttribute("src","bbfemea.png")
            } else if (idade <= 12) {
                img.setAttribute("src", "criancafemea.png")
            } else if (idade <= 18) {
                img.setAttribute("src", "adolecentefemea.png")
            } else if (idade <= 50) {
                img.setAttribute("src", "adultofemea.png")
            } else {
                img.setAttribute("src", "veafemea.png")
            }
        }
    }
    
    mensagem.innerHTML = `Detectamos ${geneno} com ${idade} anos`
    mensagem.style.textAlign = "Center"
    mensagem.appendChild(img)
}