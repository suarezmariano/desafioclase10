const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

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

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: './views/layouts',
    partialsDir: './views/patials',
  })
);
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('formulario', { productos });
});

app.post('/productos', (req, res) => {
  productos.push(req.body);
  res.render('formulario', { productos });
});
