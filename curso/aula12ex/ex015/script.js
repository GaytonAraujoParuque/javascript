function verificar(){
    var data = new Date
    var ano_atual = data.getFullYear()
    

    var fano = window.document.getElementById('ano')
    var texto = window.document.getElementById('res')
    var imagem = window.document.getElementById('imagem')
    var sexo = window.document.getElementsByName("radsex")
    var genero = ''
    var calculo = ano_atual - Number(fano.value)
    
    if (sexo[0].checked){
        genero = 'homem'
    }else if (sexo[1].checked){
        genero = 'mulher'
    }

    if (fano.value.length == 0 || fano.value > ano_atual){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        if (fano.value >= ano_atual){
            window.alert('[ERRo] O ano de nascimento não pode ser maior ou igual ao ano atual')
        }else if (fano.value <= 0){
            window.alert('[ERRO] O ano de nascimento não pode ser menor ou igual a zero')
        }
    }

    
    if (calculo > 0 && calculo <= 12 && genero == 'homem'){
        texto.innerText = `Detectamos um homem de ${calculo} anos`
        imagem.src = 'imagens/menino.jpg'
        window.document.body.style.background = 'rgb(160, 138, 102)'
    }else if (calculo > 0 && calculo <= 12 && genero == 'mulher'){
        texto.innerText = `Detectamos uma mulher de ${calculo} anos`
        imagem.src = 'imagens/menina.jpg'
        window.document.body.style.background = 'rgb(204, 218, 143)'
    }

    
    if (calculo > 12 && calculo <= 17 && genero == 'homem'){
        texto.innerText = `Detectamos um homem de ${calculo} anos`
        imagem.src = 'imagens/moco.jpg'
        window.document.body.style.background = 'rgb(206, 208, 199)'
    }else if (calculo > 12 && calculo <= 17 && genero == 'mulher'){
        texto.innerText = `Detectamos uma mulher de ${calculo} anos`
        imagem.src = 'imagens/moca.jpg'
        window.document.body.style.background = 'rgb(226, 160, 96)'
    }

    
    if (calculo > 17 && calculo <= 50 && genero == 'homem'){
        texto.innerText = `Detectamos um homem de ${calculo} anos`
        imagem.src = 'imagens/homem.jpg'
        window.document.body.style.background = 'rgb(130, 128, 132)'
    }else if (calculo > 17 && calculo <= 50 && genero == 'mulher'){
        texto.innerText = `Detectamos uma mulher de ${calculo} anos`
        imagem.src = 'imagens/mulher.jpg'
        window.document.body.style.background = 'rgb(186, 123, 144)'
    }

    
    if (calculo > 50 && genero == 'homem'){
        texto.innerText = `Detectamos um homem de ${calculo} anos`
        imagem.src = 'imagens/idoso.jpg'
        window.document.body.style.background = 'rgb(203, 203, 203)'
    }else if (calculo > 50 && genero == 'mulher'){
        texto.innerText = `Detectamos uma mulher de ${calculo} anos`
        imagem.src = 'imagens/idosa.jpg'
        window.document.body.style.background = 'rgb(211, 174, 123)'
    }
}