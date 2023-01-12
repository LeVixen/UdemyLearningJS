// // ? Switch padrão
// const data = new Date('2023-01-12 00:00:00');
// const diaSemana = data.getDay();

// let diaSemanaTexto;

// switch (diaSemana) {
//    case 1:
//       diaSemanaTexto = 'Hoje é Segunda';
//       break;
//    case 2:
//       diaSemanaTexto = 'Hoje é Terça';
//       break;
//    case 3:
//       diaSemanaTexto = 'Hoje é Quarta';
//       break;
//    case 4:
//       diaSemanaTexto = 'Hoje é Quinta';
//       break;
//    case 5:
//       diaSemanaTexto = 'Hoje é Sexta';
//       break;
//    case 6:
//       diaSemanaTexto = 'Hoje é Sábado';
//       break;
//    case 7:
//       diaSemanaTexto = 'Hoje é Domingo';
//       break;
//    default:
//       diaSemanaTexto = 'Dia Inválido!'
// }

// // ? Switch dentro de uma função
// function GetWeekDay(diaSemana) {
//    let diaSemanaTexto;
//    switch (diaSemana) {
//       case 1:
//          return diaSemanaTexto = 'Hoje é Segunda';
//       case 2:
//          return diaSemanaTexto = 'Hoje é Terça';
//       case 3:
//          return diaSemanaTexto = 'Hoje é Quarta';
//       case 4:
//          return diaSemanaTexto = 'Hoje é Quinta';
//       case 5:
//          return diaSemanaTexto = 'Hoje é Sexta';
//       case 6:
//          return diaSemanaTexto = 'Hoje é Sábado';
//       case 7:
//          return diaSemanaTexto = 'Hoje é Domingo';
//       default:
//          return diaSemanaTexto = 'Dia Inválido!';
//    }
// }

// // ? Maneira destrichada via funções

// function getMonthNames(numMonth) {
//    const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//    return month[numMonth];
// }

// function getDayNames(numDay) {
//    const day = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

//    return day[numDay];
// }

// function createDate(numMonth, numDay) {
//    return `${numDay} - ${numMonth}`
// }

// const xData = new Date();
// const Dia = getDayNames(xData.getDay())
// const Mes = getMonthNames(xData.getMonth())

// const dataFormater = `Hojé é ${Dia} dia ${xData.getDay()} de ${Mes}`


// ? Data e hora simplificada (Melhor Opção)

const data = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const dataFormat = data.toLocaleDateString('pt-BR', options);

console.log(dataFormat)
