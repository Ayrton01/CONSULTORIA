function carregarContato() {
    fetch('assets/componentes/contato/contato.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('contato-placeholder').innerHTML = data;
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard();
        }
      })
      .catch(error => console.error('Erro ao carregar a seção de contato:', error));
}