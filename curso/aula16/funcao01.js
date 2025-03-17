function parimpar(param){
    if(param % 2 == 0){
        return 'par'
    }else{
        return 'ímpar'
    }
}

var res = parimpar(4)
console.log(res)