function carregar() {

    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = 9 // data.getHours();

    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
    // Bom dia! 0h até 11:59
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'

} else if (hora >= 12 && hora < 18) {
    // Boa tarde! 12h até 17:59  
    img.src = 'fototarde.png'
    document.body.style.background = '#b9846f'

} else {
    // Boa noite! 18h até 23:59
    img.src = 'fotonoite.png' 
    document.body.style.background = '#515154'
    }
}
