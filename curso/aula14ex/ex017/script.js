function gerar(){
    let num = window.document.getElementById("numero")
    let tab = window.document.getElementById("seltab")
    let n = Number(num.value)
    let c = 1
    tab.innerHTML = ""
    while(c <= 12){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c ++
    }

}