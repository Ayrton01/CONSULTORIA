function carregarProtecao() {
    fetch("assets/componentes/protecao/protecao.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("protecao-placeholder").innerHTML = data;
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        })
        .catch(error => console.error('Erro ao carregar a seção de etapas:', error));
}