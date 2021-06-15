
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

//TODO: Requerimos de (hbs);
app.set('view engine', 'hbs');

//TODO: Parciales
hbs.registerPartials( __dirname + '/views/partials');

// Servir contenido estatico 
app.use( express.static('public'))

app. get('/home', (rec, res) => {
  res.render('home', {
    titulo: 'home',
    estado: true,
    servicio: ''
  })
})

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Lautaro Silva',
        titulo: 'Clase de NodeJS con HBS'
    })
  });

app.get('/generic', function (req, res) {
    res.render('generic')
  });

app.get('/generic1', function (req, res) {
    res.render('generic1')
  });

app.get('/generic2', function (req, res) {
  res.render('generic2')
  });  

app.get('/generic3', function (req, res) {
  res.render('generic3')
  });  
 
app.get('/generic4', function (req, res) {
  res.render('generic4')
  });

app.get('/generic5', function (req, res) {
  res.render('generic5')
  });  

app.get('/generic6', function (req, res) {
    res.render('generic6')
    });
  

app.get('/elements', function (req, res) {
  res.render('elements')
  });  

app.get('/home', function (req, res) {
  res.render('home')
  }); 

app.listen(port, () => {

    console.log(`Escuchando el servidor en el puerto http://localhost:${port}`);
});