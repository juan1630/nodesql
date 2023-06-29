/// Clean the array
/// create a function that cleans the next array ( remove repeated items )

//// Output: [1, 2, 3, 4, 5]

/* let input = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];

function cleanArr ( arr = [] ) {
    
    let  aux = [0]; 
    const arrOutput = [];

    
    arr.forEach((element, index) => {
      
      let exists = false;
      arrOutput.forEach((ele) => {
        if(ele == element ) {
          exists = true;
        }
      });
      
      if( !exists ) {
        arrOutput.push(element)
        exists= false;
      }
      
    })
   return arrOutput;
}


cleanArr( input ); */


const input = [1, 2, 2, 3, 2, 3, 4, 5, 4, 1, 4, 5];


const cleanArry = ( arr = [] ) => {

  let arrayCleaned = [];

  arr.forEach( element => {
    
    if( arrayCleaned.length == 0 ) {
      arrayCleaned.push(element);
    } 


  });

  console.log(arrayCleaned);

}

console.log(cleanArry(input));