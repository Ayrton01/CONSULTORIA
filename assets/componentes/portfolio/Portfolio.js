document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/componentes/portfolio/portfolio.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("portfolio-placeholder").innerHTML = data;
            
            // Atualiza as animações da página
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }

            // Inicializa o GLightbox (galeria de fotos)
            if (typeof GLightbox !== 'undefined') {
                const glightbox = GLightbox({
                    selector: '.glightbox'
                });
            }

            // Inicializa o Isotope (filtros de grid)
            let portfolioContainer = document.querySelector('.isotope-container');
            if (portfolioContainer && typeof Isotope !== 'undefined') {
                let iso = new Isotope(portfolioContainer, {
                    itemSelector: '.isotope-item',
                    layoutMode: 'masonry',
                    filter: '*'
                });

                // Adiciona os eventos de clique aos filtros
                let filters = document.querySelectorAll('.portfolio-filters li');
                filters.forEach(function(filter) {
                    filter.addEventListener('click', function() {
                        filters.forEach(f => f.classList.remove('filter-active'));
                        this.classList.add('filter-active');
                        iso.arrange({ filter: this.getAttribute('data-filter') });
                    });
                });
            }
        })
        .catch(error => console.error('Erro ao carregar a seção portfolio:', error));
});