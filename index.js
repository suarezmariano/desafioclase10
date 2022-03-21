const express = require('express');
const app = express();

const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productos = [];

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('Servidor corriendo en el puerto: ' + port);
});
server.on('error', (error) => console.log(`hubo un error ${error}`));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('formulario', { productos });
});

app.post('/productos', (req, res) => {
  productos.push(req.body);
  res.render('formulario', { productos });
});
