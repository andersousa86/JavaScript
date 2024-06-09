let num = [1,5,7,8,9]
num.push(0)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

console.log('=========================')
console.log(' ')

let posicao = num.indexOf(8)
if(posicao == -1){
    console.log('Valor não encontrado no vetor!')
}
else{
    console.log(`O valor está na posição ${posicao}, ou seja ${num[posicao]}`)
}