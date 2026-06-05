function carregarResume() {
    fetch("assets/componentes/etapas/etapas.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("etapas-placeholder").innerHTML = data;
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        })
        .catch(error => console.error('Erro ao carregar a seção de etapas:', error));
}