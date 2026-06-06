export function carregarOfereco() {
    fetch("assets/componentes/ofereco/ofereco.html")
        .then(response => {
            if (!response.ok) throw new Error(`HTTP erro! status: ${response.status}`);
            return response.text();
        })
        .then(data => {
            document.getElementById("ofereco-placeholder").innerHTML = data;

            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }

            const portfolioContainer = document.querySelector('.isotope-container');
            if (portfolioContainer && typeof Isotope !== 'undefined') {

                // Aguarda todas as imagens carregarem antes de inicializar o Isotope,
                // evitando cálculos incorretos de layout no masonry.
                const inicializarIsotope = () => {
                    const iso = new Isotope(portfolioContainer, {
                        itemSelector: '.isotope-item',
                        layoutMode: 'masonry',
                        filter: '*'
                    });

                    // Seletor corrigido: era '.portfolio-filters li' (inexistente)
                    document.querySelectorAll('.ofereco-filters li').forEach(function (filtro) {
                        filtro.addEventListener('click', function () {
                            document.querySelectorAll('.ofereco-filters li').forEach(f => f.classList.remove('filter-active'));
                            this.classList.add('filter-active');
                            iso.arrange({ filter: this.getAttribute('data-filter') });
                        });
                    });
                };

                // Usa imagesLoaded se disponível; caso contrário inicializa direto
                if (typeof imagesLoaded !== 'undefined') {
                    imagesLoaded(portfolioContainer, inicializarIsotope);
                } else {
                    inicializarIsotope();
                }

                // Função robusta de relayout para evitar quebra ao carregar fontes ou animações
                const forcarRelayout = () => {
                    const isoInstance = Isotope.data(portfolioContainer);
                    if (isoInstance) isoInstance.layout();
                };

                // A solução definitiva para impedir sobreposição: ResizeObserver
                // Observa qualquer mudança de tamanho nos cards em tempo real e reajusta o layout
                if (window.ResizeObserver) {
                    const resizeObserver = new ResizeObserver(() => {
                        forcarRelayout();
                    });
                    document.querySelectorAll('.ofereco-wrap').forEach(el => resizeObserver.observe(el));
                }

                // Recalcula perfeitamente com os textos e fontes finais
                if (document.fonts) {
                    document.fonts.ready.then(forcarRelayout); 
                }
            }
        })
        .catch(error => console.error('Erro ao carregar a seção de aplicações:', error));
}