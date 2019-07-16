'use strict';

const express = require('express');

const port = 3000;

const app = express();

//  esta línea de código le dice a express :los archivos estaticos vesme a la carpeta public y buscamelos allí
app.use(express.static('public'));

// el orden de las rutas es importante, si ponemos el /* el primero, todas las urls seran 404 not found
app.get('/', (red, res, next) => {
  res.sendFile(__dirname + '/public/views/home.html');
});

app.get('/about', (red, res, next) => {
  res.sendFile(__dirname + '/public/views/about.html');
});

app.get('/details', (red, res, next) => {
  res.sendFile(__dirname + '/public/views/details.html');
});

app.get('/*', (red, res, next) => {
  res.sendFile(__dirname + '/public/views/not-found.html');
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
