const users = [
    {user:'Mike', state:'NewYork', count:2500}, 
    { user:"Adrian", state: "California", count: 3000 }, 
    { user:"Mack", state: "Atlanta", count:6000 } ];



const filtenerUsers = ( users = [] ) => {

    let amount;
    let error;
    
    for( let i = 0;  users.length > i; i++  ) {
        
        if( users[i].user == 'Juan' ) {
           amount = users[i].count;
        }else{
            
            error = 'Not user found'
            return error;
        }
    }


    return amount;
}


console.log( filtenerUsers(users ) );