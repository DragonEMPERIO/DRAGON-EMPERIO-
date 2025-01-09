document.getElementById('fetchButton').addEventListener('click', function() {
  fetch('/random-data')
    .then(response => response.json())
    .then(data => {
      document.getElementById('randomData').textContent = 'Número aleatório: ' + data.data;
    })
    .catch(error => {
      console.error('Erro ao obter dados:', error);
    });
});