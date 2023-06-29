
const nombres = [
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Edgar",
  "Laura",
  "Jose",
  "Miriam",
  "Miriam",
];


const nombress= [
  'Carlos',
  'Maria',
  'Carlos'
]

const x = 1;


const nombreRepetidos = (names = []) => {
  let repetido = {};
  let mayor = 0;

  if( names.length >= 1 ) {

  names.forEach((current) => {

    if(!repetido[current]){
      repetido[current] = 0;
    }

  Object.entries(repetido).forEach(([key ]) => {
    if( key == current ){
      repetido[current] +=1;
    }
    
    })

    });

    Object.entries(repetido)
    return repetido;
  }

  return repetido.error = 'No es un array';
}


console.log( nombreRepetidos(nombres) );