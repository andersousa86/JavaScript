var idade = 2
console.log(`Você tem ${idade} anos.`)
if((idade >= 16) && (idade < 18) || (idade >= 70)){
    console.log('Seu voto é opcional!')
} else if((idade >= 18) && (idade < 70)){
    console.log('Seu voto é obrigatório!')
} else{
     console.log('Você não vota!')
}