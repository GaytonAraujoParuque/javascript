function carregar(){
    var txt = window.document.querySelector('#txt')
    var imagem = window.document.querySelector('#imagem')
    var agora = new Date
    var hora = agora.getHours()
    
    txt.innerHTML = `Agora são ${hora} horas`

    if (hora < 12 && hora >= 0){
        //Bom dia
        imagem.src = 'imagens/foto-manha.jpg'
        document.body.style.background = 'rgb(252, 194, 103)'
    }else{
        if (hora >= 12 && hora < 18){
            //Boa tarde
            imagem.src = 'imagens/foto-tarde.jpg'
            document.body.style.background = 'rgb(164, 159, 77)'
        }else{
            //Boa noite
            imagem.src = 'imagens/foto-noite.jpg'
            document.body.style.background = 'rgb(75, 59, 86)'
        }
    }
}
