

function contar(){
    var inicio = window.document.querySelector('#inc')
    var  fim = window.document.querySelector('#fim')
    var passo = window.document.querySelector('#passo')
    var res = window.document.getElementById('res')
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    /*if (inicio.length == 0 || fim.length == 0 || passo.length == 'undefined'){
        window.alert("Por favor, preencha todos os campos")
    }else{
        alert(`inicio = ${inicio} fim = ${fim.length} passo = ${passo.length}`)
    }*/
    res.innerHTML = 'Contando... '
    if (inicio > fim){
        for (var c = inicio; c >=fim; c -= passo){
            res.innerHTML += `${c} `
        }
    }else{
        for (c = inicio; c <= fim; c += passo){
            res.innerHTML += `${c}`
        }
    }

    res.innerHTML += `Fim`
}
