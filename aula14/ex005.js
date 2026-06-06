/* let agora  = new Date()
let diaSem = agora.getDay()

console.log(diaSem)

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!') 
        break
} 8 */

/*******************************************************************/

/* const diaHoje = new Date().toLocaleDateString('pt-BR', { weekday: 'long' });

console.log(diaHoje); // Ex: 'terça-feira' */

/******************************************************************/

/*const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const mesAtual = meses[new Date().getMonth()];
console.log(`Estamos no mês de ${mesAtual}.`);*/

const anoAtual = new Date().getFullYear();
console.log(`Estamos no Ano de ${anoAtual}.`);
