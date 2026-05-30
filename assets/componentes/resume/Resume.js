document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/componentes/Resume/resume.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("resume-placeholder").innerHTML = data;
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        });
});