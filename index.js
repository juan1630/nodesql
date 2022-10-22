const express  = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');

const app =express();

const cors = require('cors');

app.use(bodyParser.json({ type: 'application/json' }))
app.use(cors());

app.listen(3001, ()=> {
    console.log('Corriendo en el puerto 3000')
});



app.get('/',async (req, resp) => {
    

    const coneccion = await mysql.createConnection({
        host:"localhost",
        database:"pruebas",
        user:"juan",
        password:"febrero-66"
    });


    try{
        const response = await  coneccion.execute('select * from usuarios limit 5');

        return resp.json({
            ok:true,
            status: 200,
            response: response[0],
            count: response[0].length
        })

    }catch(error){
        console.log(error);
        return resp.json({
            ok: false,
            error
        });
    }
    

});


app.post('/new', async(req, resp) => {

    console.log(req.body)
    const { name, email, id } = req.body;

    try{
        
        const coneccion = await mysql.createConnection({
            host:"localhost",
            database:"pruebas",
            user:"juan",
            password:"febrero-66"
        });

      const response = await  coneccion.execute('insert into usuarios (name, email, id) values (?,?,?)', [name, email, id] );

      console.log(response);

      return resp.json({
        ok:true,
        status: 201,
        response: response[0]
    })

    }catch (error) {
        console.log(error);
        return resp.json({
            ok: false,
            error
        });
    }



});