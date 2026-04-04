document.addEventListener('DOMContentLoaded', () => {
  // Añadir evento al botón "Comenzar"
  const startBtn = document.getElementById('comenzar-btn');
  startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('¡Bienvenido! Has hecho clic en el botón Comenzar.');
  });
});