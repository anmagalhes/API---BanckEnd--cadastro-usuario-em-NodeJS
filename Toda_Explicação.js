/* IMPORTAR FRAMEWOKR */
const express = require("express");
const port = 3033
const app = express();
app.use(express.json())


 /* 
 - QUERY PARAMS => meu.site.com/users?name=tony&age=39 // FILTROS

 EXEMPLO:

 - PRIMEIRA MANEIRA

app.get('/users',(request, response) =>{
    const name = request.query.name
    const age = request.query.age

    return response.json({Outronome:name, age:age})
});

 - SEGUNDA MANEIRA - DESTRUCTURING ASSIGNMENT (MELHOR MANEIRA)

app.get('/users',(request, response) =>{
    const {name,age} = request.query
    return response.json({Outronome:name, age:age})
});


 - ROUTE PARAMS => /users/2    //BUSCA, DELETAR OU ATUALIZAR ALGO ESPECÍFICO

EXEMPLO DO SITE: http://localhost:3033/users/60 ( RETORNA O NÚMERO 60 )

 app.get('/users/:id',(request, response) =>{
    const {id} = request.params
    
    return response.json({id})

});

 - REQUEST BODY => VIA JSON - {name:"Tony, age:39"}

 EXEMPLO SITE: http://localhost:3033/users

app.get('/users',(request, response) =>{
    const{name, age} = request.body

    return response.json({name, age})

});

  
 */

app.get('/users',(request, response) =>{
    const{name, age} = request.body

    return response.json({name, age})

});

app.listen(port, () =>{
    console.log('PORTA LIBERADA')
    
});

