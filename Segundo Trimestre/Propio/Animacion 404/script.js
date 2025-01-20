function caerYDesaparecer() {
    let filmContainer = document.querySelector('.film-container');
    filmContainer.style.transition = 'all 1s ease'; // Añadir una transición para suavizar la caída
    filmContainer.style.transform = 'translateY(500px)'; // Hacer que el elemento caiga
    filmContainer.style.opacity = '0'; // Desvanecer el elemento
  }
  
  // Añadir evento de clic al elemento .film-container
  document.querySelector('.film-container').addEventListener('click', caerYDesaparecer);  