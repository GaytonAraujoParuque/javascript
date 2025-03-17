var banco =  []

function adicionar(){
    var numero = window.document.getElementById("numero")
    var seletor = window.document.getElementById('seletor')
    var num = Number(numero.value)
    var idx = banco.indexOf(num)
    var len = numero.value

    if (len.length == 0){
        window.alert("Erro! Por favor digite um valor")
    }else if(idx != -1){
        window.alert("ERRO! O valor já foi adicionado")
    }else if(num < 1 || num > 100){
        window.alert("ERRO! O número deve estar entre 1 e 100")
    }else{
        banco.push(num)
            let item = document.createElement('option')
            item.text = `valor ${num} cadastrado`
            seletor.appendChild(item)
    }
    numero.value = ''
}

function finalizar(){
    var taman = banco.length
    if (taman == 0){
        window.alert(`ERR0! Nenhum valor foi inserido!)`)
    }else{
        var total = window.document.getElementById('total')
        var maior = window.document.getElementById('maior')
        var menor = window.document.getElementById('menor')
        var soma = window.document.getElementById('soma')
        var media = window.document.getElementById('media')
        var maximo = Math.max(...banco)
        var n = 0
        for (var c = 0; c < banco.length; c++){
            n += banco[c]
        }

        total.innerText = `No total temos ${banco.length} numeros cadastrados`
        maior.innerText = `O maior número cadastrado é ${maximo}`
        menor.innerText = `O menor número cadastrado é ${Math.min(...banco)}`
        soma.innerText = `A soma de todos os números cadastrados é ${n}`
        media.innerText = `A média dos números cadastrados é ${n / banco.length}`
        }
}