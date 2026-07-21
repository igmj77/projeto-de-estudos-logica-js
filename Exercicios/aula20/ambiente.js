/*
var c = 1
do {
    console.log(`passo ${c}`)
}   while (c <= 6)

/*
for (var c = 1;c <= 5;c++) {
    
}

/* console.log('Vai começar...')
for (var c = 1;c <= 4;c++) {
    console.log(c)
}
console.log('FIM')
*/

/********************************************************************/

/*let num = [7, 9, 3, 5, 1]

    num[6] = 8
    num.push(4)
    num.length
    num.sort()

    console.log(`nosso vetor é o ${num}`)
    
   /* let num = [7, 9, 3, 5, 1]
        console.log(num)
        console.log(num.push(0))
        console.log(num.sort())
        console.log(`o vetor tem ${num.length} posiçôes`)
        console.log(`o 1º valor do vetor é ${num[0]}`)
    
/*let valores = [7, 9, 3, 5, 11]

for(let pos=0; pos < valores.length; pos++) {

    console.log(`a posição ${pos} tem o valor ${valores[pos]}`) 
}

/*let valores = [9, 7, 5, 3, 1, 0]

valores.sort((a, b) => a - b)

for (let pos in valores) {
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}*/

/*
let num = [7, 9, 3, 5, 1]
    num.push(0)
    num.sort()
        console.log(num)
        console.log(`o vetor tem ${num.length} posiçôes`)
        console.log(`o 1º valor do vetor é ${num[0]}`)
    let pos = num.indexOf(3)
        if (pos == -1) {
            console.log('o valor não foi encontrado!')
        } else {
            console.log(`o valor está na posição ${pos}`)
        }
*/

/*********************************************************************/

/*let amigo = {nome: 'José', sexo: 'm', peso: '85.4'}
console.log(typeof amigo)*/

let amigo = {nome: 'José',
sexo: 'M',
peso: 85.9,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
}}
amigo.engordar(7.1)
console.log(`${amigo.nome} agora está pesando, ${amigo.peso} Kg!`)

/*console.log(amigo.nome)*/ 