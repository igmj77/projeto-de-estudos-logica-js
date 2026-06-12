function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { // A || significa 'ou então'.
        window.alert('[erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') // a virgula neste caso é chamada de 'para'.
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'adolescentemenino.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                // idoso
                img.setAttribute('src', 'avohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'adolescentemenina.png')
            } else if (idade < 50) {
                // adulta
                img.setAttribute('src', 'adultamulher.png')
            } else {
                // idosa
                img.setAttribute('src', 'avomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}