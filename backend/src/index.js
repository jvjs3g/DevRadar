const express  = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://omniStack:omniStack@cluster0-5zc95.mongodb.net/cadastro?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology : true
});
app.use(cors())
app.use(express.json());

// Métodos HTTP: GET,POS,PUT,DELETE

// Tipos de parametos

//query params : request.query (Filtos,ordenaçoes ,paginaçao);
//query params : request.params ( identificar um recurso na alterção ou remoção );
// body : request.body (Dados para criação ou alteração de um registro );


app.use(routes);
app.listen(3333);