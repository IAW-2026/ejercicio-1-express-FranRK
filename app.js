const express = require('express');
const app = express();
const port = 3000;
const path = require('path'); //esto para que no falle en otro sistema operativo. 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta raíz
app.get('/', (req, res) => {
  // __dirname es una variable de Node que tiene la ruta de tu carpeta actual
  /*se hace path.join para poder acceder tanto en linux como en windows, ya que ambos manejan diferente las 
    barras. 
    __dirname, es para manejar concretamente a la ruta donde esta index.html. Ya que sendFile se maneja con
    dirrecciones absolutas.*/ 
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
//Punto 1.2. Manejo de elementos estaticos mediante express.static: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))
/*Todo lo que se acceda a public, esta estara invisible en la url. Todo lo accederemos de manera directa con los links
Si tengo alog llamado index.html dentro de esto, sera a donde accederemos de manera raíz.*/

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

