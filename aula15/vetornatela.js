let num = [1,2,5,8,9]
num.sort
for(let pos = 0; pos < num.length; pos++){
    console.log(`Vetor na posição ${pos} é ${num[pos]}`)
}

console.log("================")
console.log('Forma mais simplificada com for')

for(let pos in num){
    console.log(`Vetor na posição ${pos} é ${num[pos]}`)
}