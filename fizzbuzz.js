// divisivel por 3 => Fizz
// divisivel por 5 => Buzz
// divisivel por 3 e 5 => FizzBuzz
// não divisivel por 3 ou 5 => entrada
// não é um numero => 'não é um numero'

const resultado = fizzBuzz(1);
console.log(resultado);

function fizzBuzz(entrada){
if (typeof entrada !== 'number')
 return 'não é um número';
if (entrada % 3 === 0)
return 'Fizz';
if(entrada % 5 === 0)
return 'Buzz';
if((entrada % 3 === 0) && (entrada % 5 === 0))
return 'FizzBuzz';
return entrada;
}