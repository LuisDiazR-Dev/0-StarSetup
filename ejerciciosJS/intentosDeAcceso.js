var intentosRestantes = 10;
var codigoIngresado = [];
var registros = []
var password = 1234;

const lote = [1101, 1102, 1103, 1104, 1105, 1234, 1107, 1108, 1109, 1110,
              1111, 1112, 1113, 1114, 1115, 1116, 1234, 1118, 1119, 1234]

for (let i=0; i < lote.length; i++){    
  let access
  
  let element = lote[i];
  
    if(element !== password ){    
      codigoIngresado.push(element)
      access = 'Fail'
      --intentosRestantes
      intentosRestantes == 0 ? access = 'bloqueado' : true
    }  
    if(element == password ){
      registros.push({
        intentos: intentosRestantes,
        registro: codigoIngresado 
      })    
      codigoIngresado = [];
      intentosRestantes = 10    
      access = 'Acceso'
    }
  console.log(access)
}
console.log(intentosRestantes);
console.log(registros);