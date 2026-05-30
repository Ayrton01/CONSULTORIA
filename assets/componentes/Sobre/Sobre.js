document.addEventListener("DOMContentLoaded", function() {
    fetch('assets/componentes/Sobre/sobre.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('sobre-placeholder').innerHTML = data;
        // Atualiza as animações AOS depois do HTML ser injetado na página
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard();
        }
        // Inicializa o PureCounter para renderizar os números da seção Stats
        if (typeof PureCounter !== 'undefined') {
          new PureCounter();
        }
      })
      .catch(error => console.error('Erro ao carregar a seção sobre:', error));
});