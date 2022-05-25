function carregar() {
   var msg = document.getElementById('msg')
   var img = document.getElementById('imagem')
   var data = new Date()
   var hora = data.getHours() 
   msg.innerHTML = `Agora são ${hora} horas.`
   if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = './Imagens/fotomanha.png'
    document.body.style.background = '#ffff00ad'
    } else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = './Imagens/fototarde.png'
    document.body.style.background = '#deb887'
    } else if (hora >= 18 && hora < 24) {
    //BOA NOITE!
    img.src = './Imagens/fotonoite.png'
    document.body.style.background = '#00007c'
    }
}
