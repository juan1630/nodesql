/**
 * 
 * @param {
 * } textArg 
 * @returns 
 */

// first case 

const reverseString1 = ( s = [] ) => {

    const joined = s.reverse().join('');
    return joined;
}


//console.log( reverseString1( ['H','e','l', 'l', 'o'] ));

let s =["H","a","n","n","a","h"]

//console.log( reverseString1(s) )

const reverseText = ( textArg = ''  ) => {
    // create an array from my text
    const spread =  [...textArg];
    //reverse my text and joined 
    const joined = spread.reverse().join('');
    return joined;
}



const string = "Welcome to this Javascript Guide!";
//console.log(reverseText(string))



var reverseStr = function(s, k) {
    const spread = [ ...s];
    let aux = '';

    for( let i =0; i < spread.length; i++){
        console.log( spread[i] , i )
        if( i % k == 0  || i == 0 ) {
            aux = spread[i]; 
            spread[i] = spread[i+1]; 
            spread[i+1] = aux; 
            aux ='';
        }else {
            continue
        }
    }


    return spread.join('');
};

let s1 =  "abcdefg", k = 2



const reverseText2 = ( text ='' ) => {
    
    if( typeof text == 'string' ){
        const lowerText = text.toLocaleLowerCase();
        const spread = [...lowerText];   
        const reversed = spread.reverse().join('');
       //join method needs a variable 
       return reversed;
    }
    
    return 'No es un texto';
}

console.log( reverseText2('juan' ));