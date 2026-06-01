function carregarPortfolio() {
    fetch("assets/componentes/aplicacoes/aplicacoes.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("portfolio-placeholder").innerHTML = data;
            
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }

            if (typeof GLightbox !== 'undefined') {
                const glightbox = GLightbox({ selector: '.glightbox' });
            }

            let portfolioContainer = document.querySelector('.isotope-container');
            if (portfolioContainer && typeof Isotope !== 'undefined') {
                let iso = new Isotope(portfolioContainer, { itemSelector: '.isotope-item', layoutMode: 'masonry', filter: '*' });
                document.querySelectorAll('.portfolio-filters li').forEach(function(filter) {
                    filter.addEventListener('click', function() {
                        document.querySelectorAll('.portfolio-filters li').forEach(f => f.classList.remove('filter-active'));
                        this.classList.add('filter-active');
                        iso.arrange({ filter: this.getAttribute('data-filter') });
                    });
                });
            }
        });
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", carregarPortfolio);
} else {
    carregarPortfolio();
}