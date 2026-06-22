function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Entre com um número válido!')
    } else {
        //alert('Tudo ok!')
        res.innerHTML = 'Contando ... ' //<br> para pular a linha, estamos trab. com innerHTML e não com innertxt.
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considere Passo 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1f449} `
            }        
        } else {
            // contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1f449} `
            }
        }
        res.innerHTML += ` \u{1F3C1} `
    }
}