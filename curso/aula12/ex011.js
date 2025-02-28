var idade = 22
if (idade < 16){
    console.log(`MENOR de idade, não vota`)
}else{
    if (idade == 16 || idade == 17 || idade >= 65){
        console.log('Voto opcional')
    }else{
        if (idade > 17 && idade != 16){
            console.log('Voto obrigatório')
        }
    }
}