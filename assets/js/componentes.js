(function() {
    // Array com os caminhos dos scripts na exata ordem desejada
    const scripts = [
        "assets/js/fundamentos.js",
        "assets/js/etapa.js",
        "assets/js/aplicacoes.js",
        "assets/js/contato.js"
    ];

    scripts.forEach(function(src) {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // "false" garante que o navegador vai carregá-los na ordem correta
        document.body.appendChild(script);
    });
})();