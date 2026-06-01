function carregarResume() {
    fetch("assets/componentes/etapas/etapas.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("resume-placeholder").innerHTML = data;
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", carregarResume);
} else {
    carregarResume();
}