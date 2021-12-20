/* IMPORTAR FRAMEWOKR 
import express from "express";
import {v4} from "uuid";
import cors from "cors";
*/


/* LOCALMENTE */
const express = require("express");
const uuid = require("uuid"); /* BIBLIOTECA CRIAR ID - VAMOS USAR V4*/
const cors = require("cors");

const port = 3033;

const app = express();
app.use(express.json());
app.use(
  cors()
); /* HABILITAR OS ENDERENÇOS DE SITE QUE VAI SER LIBERADOS CONSULTAR O BANCK END

/* 
 - GET
 
 - POST

 - PUT/PATH

 - DELETE

 - MIDDLEWARES => INTERCEPTADOR  => TEM  O PODER DE PARAR OU ALTERAR DADOS DE REQUISIÇÕES

 - VOLTAR PARA SABER COMO COLOCAR OS ICONES NO VISUAL ESTUDIO CODE

 EXEMPLO:

 const myFistMiddleware = (request, response, next) =>{

  next()
  
}

app.use(myFistMiddleware)

 */

const users = [];

const CheckUserId = (request, response, next) => {
  const { id } = request.params;

  const index = users.findIndex((nomequalquer) => nomequalquer.id === id);

  if (index < 0) {
    return response.status(404).json({ mensagem: "não encontrado" });
  }

  /* CRIAR UMA NOVA FUNÇÃO */
  request.userIndex = index;
  request.userId = id;

  next();
};

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;

  const user = { id: uuid.v4(), name, age };

  users.push(user);
  return response.status(201).json(user);
});

app.put("/users/:id", CheckUserId, (request, response) => {
  const { name, age } = request.body;
  const index = request.userIndex;
  const id = request.userId;

  const updateUser = { id, name, age };

  users[index] = updateUser;
  return response.json(updateUser);
});

app.delete("/users/:id", CheckUserId, (request, response) => {
  /* PODE CRIAR UMA NOVA VARIAVEL PARA CHAMAR A FUNÇÃO DO INDEX ID DO USUARIO */
  const index = request.userIndex;

  users.splice(index, 1);

  return response.status(204).json();
});

app.listen(port, () => {
  console.log("PORTA LIBERADA");
});
