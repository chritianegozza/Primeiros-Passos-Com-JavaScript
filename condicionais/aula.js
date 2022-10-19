//estruturas condicionais 

/* Bolleano 
const eAzul = true;
const nAzul = false;


var maiorQDez = 1 >= 10;

console.log(eAzul);
console.log(nAzul);
console.log(maiorQDez);
*/



//mostra se é par em bolean
/*const numero =  10;
const numeroPar = (numero % 2) === 0;
console.log(numeroPar);
*/


//para ver se é ou não par 
/*
 if

const numero = 2;
const numeroPar = (numero % 2) === 0;
console.log(numeroPar);
if(numeroPar){
    console.log('par');
}

/* if 
const numero = 2;
const numeroPar = (numero % 2) === 0;
console.log(numeroPar);
if(numeroPar){
    console.log('par');
}

if(!numeroPar){
    console.log('impar');
}
*/


/**
 * if e else
 * 
 * 
    const numero = 5;
    const numeroPar = (numero % 2) === 0;
    
    if(numeroPar){
        console.log('par');
    }else {
        
        console.log('impar');
    }
 
*/

/*  numero é divisivel por 5
const numero = 5;
    const numeroDivisivelPor5 = (numero % 5) === 0;
    
    if(numeroDivisivelPor5){
        console.log('Sim');
    }else {
        
        console.log('Não');
    }
*/    


/*
    const numero = 0;
    const numeroDivisivelPor5 = (numero % 5) === 0;

       if(numero === 0) {
        console.log('O número é inválido');
       }
        
        if(numeroDivisivelPor5){
            console.log('Sim');
        }else {
            
            console.log('Não');
        }
*/




/* if - else if - else 
const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

   if(numero === 0) {
    console.log('O número é inválido');
   }else if(numeroDivisivelPor5){
        console.log('Sim');
    }else {
        
        console.log('Não');
    }

*/


/*
const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

   if(numero === 0) {
    console.log('O número é inválido');
   } else if (numero === 5){
    console.log('O número é inválido');
    }else if(numeroDivisivelPor5){
        console.log('Sim');
    }else {
        
        console.log('Não');
    }
*/



const numero = 5;
const ehNumeroPar = (numero % 2) === 0;

if (ehNumeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}