function contar(){
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let pas = document.getElementById('txtpas')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0){
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0){
            window.alert('Passo inválido! Considerando PASSO = 1.')
            p = 1
        }

        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f; c += p){
            res.innerHTML += `\u{1f449}${c} `
            }
        }
        else{
            //Contagem decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `\u{1f449}${c} `
            }
        }
        res.innerHTML += `\u{1f3c1}`
    } 
}