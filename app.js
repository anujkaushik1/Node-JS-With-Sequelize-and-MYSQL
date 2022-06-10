const express = require('express');
const app = express();
const db = require('./models/index');
const {createUser, updateUser} = require('./controller/user');

const PORT = 3000;

app.use(express.json());

app.get('/', function(req, res){
    res.send("Hello World");
});

app.post('/create', createUser)

app.put('/update/:id', updateUser);

app.listen(PORT, function(){
    console.log("Sever is listening at port", PORT);
});