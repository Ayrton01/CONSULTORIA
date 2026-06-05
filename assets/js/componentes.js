(function() {
    // Configuração dos scripts e suas respectivas funções de inicialização
    const scripts = [
        { src: "assets/js/fundamentos.js", initFn: "carregarSobre" },
        { src: "assets/js/etapas.js", initFn: "carregarResume" },
        { src: "assets/js/aplicacoes.js", initFn: "carregarPortfolio" },
        { src: "assets/js/contato.js", initFn: "carregarContato" }
    ];

    function executarPronto(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener("DOMContentLoaded", callback);
        } else {
            callback();
        }
    }

    scripts.forEach(function(item) {
        const script = document.createElement("script");
        script.src = item.src;
        script.async = false; // Garante que o navegador vai carregá-los na ordem correta
        script.onload = function() {
            if (typeof window[item.initFn] === 'function') {
                executarPronto(window[item.initFn]);
            }
        };
        document.body.appendChild(script);
    });
})();