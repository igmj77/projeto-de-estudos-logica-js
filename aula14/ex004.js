/*let hora = 11
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else if (hora < 24) {
    console.log('Boa noite!')
} */

const hora = new Date().getHours()

let saudacao;

if (hora >= 0 && hora < 6) {
    saudacao = 'Boa madrugada!';
} else if (hora < 12) {
    saudacao = 'Bom dia!';
} else if (hora < 18) {
    saudacao = 'Boa tarde!';
} else {
    saudacao = 'Boa noite!';
}

console.log(saudacao);