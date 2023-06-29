const arr = [1,5,2,3,2,4,1,5,3,1,2];

/*
    First 
*/



const dontRepit = ( arr = [] ) => {
    
    const len = arr.length;
    const repetidos = [];

    for(let i = 0; i < len; i++){
        
        if( repetidos.length == 0 ){
            repetidos.push(i);
        }

/**
 * indexOf
 * El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.
 */
        if( repetidos.indexOf( arr[i] ) === -1 ){
            repetidos.push( arr[i] );
        }
    }
    
    return repetidos;
};

console.log( dontRepit( arr ) );
// console.log(arr);