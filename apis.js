const apiUrl = 'https://api.publicapis.org/entries'; // URL de la API

const apiList = document.getElementById('api-list');

// Solicitud a la API
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Procesa los datos y muestra en la página
    data.entries.forEach(entry => {
      const listItem = document.createElement('li');
      listItem.textContent = `${entry.API} - ${entry.Description}`;
      apiList.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error('Error al obtener datos de la API:', error);
  });