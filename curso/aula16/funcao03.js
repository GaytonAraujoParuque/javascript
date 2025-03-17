function fatorial (x){
    var fat = 1

    if (x == 1){
        return 1
    }else{
        for (var c = x;c > 1; c -- ){
            console.log(`${fat} x ${c} = ${fat *= c}`)}
    }
}
fatorial(5)