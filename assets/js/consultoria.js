export function carregarConsultoria() {
    fetch('assets/componentes/consultoria/consultoria.html')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP erro! status: ${response.status}`);
        return response.text();
      })
      .then(data => {
        document.getElementById('consultoria-placeholder').innerHTML = data;
        
        if (typeof AOS !== 'undefined') {
          AOS.refreshHard();
        }
        if (typeof PureCounter !== 'undefined') {
          new PureCounter();
        }
      })
      .catch(error => console.error('Erro ao carregar a seção sobre:', error));
}