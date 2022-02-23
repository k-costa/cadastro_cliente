const { request, response } = require('express');
const express = require('express');

const app = express ();
app.use(express.urlencoded());

app.get('/', (request, response) =>{
    console.log('Servidor foi requisitado')

    return response.send('Servidor respondeu!')
})

app.post('/contato', (request, response)=> {
    console.log('Servidor foi requisitado via POST -/contato')

    const corpo = request.body;

    console.log('NOME:', corpo.nome);
    console.log('E-MAIL:', corpo.email);
    console.log('SENHA:', corpo.senha);

    return response.send('ok!');
})

app.listen(3333, () => {
    console.log('Servidor inicializado na porta: 3333')
})