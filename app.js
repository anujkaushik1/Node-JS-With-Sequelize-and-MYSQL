const express = require('express');
const app = express();
const db = require('./models/index');
const {createUser, updateUser, deleteUser, bulkCreate, findAll} = require('./controller/user');

const PORT = 3000;

app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello World");
});

app.post('/create', createUser)

app.put('/update/:id', updateUser);

app.delete('/delete/:id', deleteUser);

app.post('/bulk', bulkCreate);

app.get('/getall', findAll);

app.listen(PORT, function(){
    console.log("Sever is listening at port", PORT);
});