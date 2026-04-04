const express = require('express');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

// Middleware básico para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: '¡Algo salió mal!' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
}); 

//Punto 1.2. Manejo de elementos estaticos mediante express.static: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
/*Todo lo que se acceda a public, esta estara invisible en la url. Todo lo accederemos de manera directa con los links
Si tengo alog llamado index.html dentro de esto, sera a donde accederemos de manera raíz.*/