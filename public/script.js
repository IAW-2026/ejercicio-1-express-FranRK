document.addEventListener('DOMContentLoaded', () => {
  // Añadir evento al botón "Comenzar"
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('¡Bienvenido! Has hecho clic en el botón Comenzar.');
  });
});