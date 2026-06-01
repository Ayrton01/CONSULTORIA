function carregarSobre() {
    fetch('assets/componentes/fundamentos/fundamentos.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('sobre-placeholder').innerHTML = data;
        
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard();
        }
        if (typeof PureCounter !== 'undefined') {
          new PureCounter();
        }
      })
      .catch(error => console.error('Erro ao carregar a seção sobre:', error));
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", carregarSobre);
} else {
    carregarSobre();
}