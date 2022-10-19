//Faça um programa para calcular o valor  uma vaigem.
/**
 * Você terá 3 vaiáveis.Sendo elas:
 * 1-Preço do combustivel;
 * 2- Gasto médio de combustivel do carro por km;
 * 3-Distância em km da viagem;
 * 
 * Imprima no console o valor que será gasto para realizar esta vaigem.
 */


const precoCombustivel = 5.69;
const gastoMedioCobustivel = 10;
const distanciaKm = 100;

const totalConsumido = distanciaKm / gastoMedioCobustivel;
const valorGasto = totalConsumido * precoCombustivel;
console.log(valorGasto.toFixed(2));//irá mostrar 2 casas decimais 
//console.log(parseInt(valorGasto)); // mostra o numero com varis casas decimais 

