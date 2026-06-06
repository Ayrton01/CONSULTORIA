import { carregarConsultoria } from './consultoria.js';
import { carregarProtecao } from './protecao.js';
import { carregarOfereco } from './ofereco.js';
import { carregarContato } from './contato.js';

function executarPronto(callback) {
    if (document.readyState === 'loading') {
        document.addEventListener("DOMContentLoaded", callback);
    } else {
        callback();
    }
}

executarPronto(() => {
    carregarConsultoria();
    carregarProtecao();
    carregarOfereco();
    carregarContato();
});