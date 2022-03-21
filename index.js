const express = require('express');
const app = express();

const router = express.Router();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('servidor levantado en el puerto: ' + port);
});
server.on('error', (error) => console.log(`hubo un error ${error}`));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('formulario', { personas });
});

app.post('/productos', (req, res) => {
  console.log(req.body);
  personas.push(req.body);
  res.render('formulario', { productos });
});
