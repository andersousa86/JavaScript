let amigo = {
    nome:'Paty', 
    sexo:'F', 
    peso:59, 
    engordou(p=0){
        console.log(`Engordou ${p}kg`)
        this.peso += p
    }}
    amigo.engordou(2)
    console.log(`${amigo.nome} tem ${amigo.peso}kg`)