const express = require('express');

const server =  express();
server.use(express.json());
// CRUD = Create, Read, Update, Delete

// Query params = ?teste=1
/*server.get('/teste', (req, res ) =>{
  const nome = req.query.nome;
  return res.json({ message: `Hello ${nome}`});
});*/

// Route params = /users/1
/*server.get('/users/:id', (req, res ) =>{
  //const id = req.params.id;
  const {id} = req.params;
  return res.json({ message: `Buscando o usuário ${id}`});
});*/

const users = ["Kelly", "Bruno", "Victor"];

server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', (req, res ) =>{
  const {index} = req.params;
  return res.json(users[index]);
});

// Request body = {"name": "Bruno", "emaol": "mendesvalentim2gmail.com" }
server.post('/users', (req, res) =>{
  const {name} = req.body;
  users.push(name);
  return res.json(users);
})

server.put('/users/:index', (req, res) => {
  const {index} = req.params;
  const {name}  = req.body;
  
  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', (req, res) =>{
  const {index} = req.params;
  users.splice(index, 1);
  return res.send();
})
server.listen(3000);