import { getCountry, getCurrencyAbbreviation, getCurrency, getCountryByAbbreviation } from 'currency-map-country';
let monedaDelPais, codigoPais;
console.clear();
codigoPais = 'AR';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);
codigoPais = 'UZA';
monedaDelPais = obtenerMoneda(codigoPais);
console.log(`La moneda del país ${codigoPais} es: ${monedaDelPais}`);

function obtenerMoneda(paisAbreviado) {
    
let nombrePais = getCountryByAbbreviation(paisAbreviado);
let returnValue = null
let monedaDelPais;

if (nombrePais!=null){
    monedaDelPais = getCurrencyAbbreviation(nombrePais);
    returnValue = monedaDelPais;
}
return returnValue;
}
// Habia perdido los archivos anteriores y ahora este esta incompleto de nuevo, pero lo voy a entregar como esta por ahora