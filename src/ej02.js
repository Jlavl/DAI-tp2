/* Importo la constante PI y la función sumar del módulo matematica. */
import {PI, sumar,restar,multiplicar,dividir} from './modules/matematica.js';
let total1, total2, total3, total4, numero1=10, numero2=20;
console.clear();
console.log(`La constante PI vale '${PI}'`); // Uso la constante PI importada.
total1 = sumar(numero1, numero2); // Uso la función sumar importada.
console.log(`sumar(${numero1}, ${numero2}) = ${total1}`);
total2 = restar(numero2, numero1);
console.log(`restar(${numero2}, ${numero1}) = ${total2}`)
total3 = multiplicar(numero1, numero2);
console.log(`multiplicar(${numero1}, ${numero2}) = ${total3}`)
total4 = dividir(numero2, numero1);
console.log(`dividir(${numero2}, ${numero1}) = ${total4}`)
//