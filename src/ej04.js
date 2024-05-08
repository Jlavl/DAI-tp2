import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);
function copiar(origen, destino){
    let contenido = fs.readFile(origen, (err, data) => {
        if (err){ throw err;
        console.log(data); 
      }  
        else {
            fs.writeFile(destino, data,  (err) => {
            console.log(err)})
        }})
    }

//