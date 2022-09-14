const express = require('express');
const app = express();
const { engine } = require('express-handlebars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productos = [];

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('Servidor corriendo en el puerto: ' + port);
});
server.on('error', (error) => console.log(`hubo un error ${error}`));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('main', { productos });
});

app.post('/productos', (req, res) => {
  productos.push(req.body);
  res.render('formulario', { productos });
});
